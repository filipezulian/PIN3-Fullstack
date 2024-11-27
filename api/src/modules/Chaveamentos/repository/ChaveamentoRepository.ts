import { getRepository, Repository } from "typeorm";
import { Chaveamento } from "../entities/Chaveamento";
import { IChaveamentoRepository } from "./IChaveamentoRepository";
import { AppError } from "@config/AppError";
import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";
import { ITimeRepository } from "@modules/Times/repository/ITimeRepository";
import { Time } from "@modules/Times/entities/Time";

class ChaveamentoRepository implements IChaveamentoRepository {
    private chaveamentoRepository: Repository<Chaveamento>;
    private timeRepository: Repository<Time>;

    constructor(
    ) {
        this.chaveamentoRepository = getRepository(Chaveamento);
        this.timeRepository = getRepository(Time);
    }

    gerarChaveamento({chav_id, name, times}: CriarChaveamentoDTO) {
        try {
            if (chav_id === 1) {
                return this.generateSingleElimination(times, name);
            } else if (chav_id === 2) {
                return {
                    type: "free-for-all",
                    name: name ?? '',
                    times,
                };
            } else {
                throw new AppError("Tipo de chaveamento inválido", 400);
            }
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível gerar chaveamento agora, tente novamente mais tarde', 500)
        }
    }

    generateSingleElimination(teams: string[], name?: string) {
        const rounds = [];
        let currentRoundTeams = [...teams];
        let matchId = 1;
    
        while (currentRoundTeams.length > 1) {
            const seeds = [];
            for (let i = 0; i < currentRoundTeams.length; i += 2) {
                seeds.push({
                    id: matchId++,
                    date: new Date().toDateString(),
                    teams: [
                        { name: currentRoundTeams[i] },
                        { name: currentRoundTeams[i + 1] },
                    ],
                });
            }
    
            rounds.push({
                title: `Round ${rounds.length + 1}`,
                seeds,
            });
    
            currentRoundTeams = seeds.map((_, index) => `Winner ${index + 1}`);
        }
    
        return {
            type: "single-elimination",
            name: name ?? '',
            rounds,
        };
    }

    async listChaveamento(): Promise<Chaveamento[]> {
        try {
            return await this.chaveamentoRepository.find();
        } catch (error) {
            console.log(error);
            throw new AppError('Não foi possível pegar chaveamentos', 500)
        }
    }

    getChaveamentoById(chav_id: number): Promise<Chaveamento> {
        try {
            const chaveamento = this.chaveamentoRepository.findOne({where: {
                chav_id: chav_id,
            }});

            return chaveamento;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar esse chaveamento', 500)
        }
    }

    async generateChaveamentoWithIds({ chav_id, name, times_id }: { chav_id: number; name?: string; times_id: number[] }) {
        try {
            // Fetch team data based on times_id
            const teams = await this.getTeamsByIds(times_id);
    
            if (chav_id === 1) {
                // Use existing single-elimination logic with the fetched team names
                return this.generateSingleElimination(teams.map(team => team.name), name);
            } else if (chav_id === 2) {
                return {
                    type: "free-for-all",
                    name: name ?? '',
                    times: teams,
                };
            } else {
                throw new AppError("Tipo de chaveamento inválido", 400);
            }
        } catch (error) {
            console.error(error);
            throw new AppError('Não foi possível gerar chaveamento agora, tente novamente mais tarde', 500);
        }
    }

    async getTeamsByIds(times_id: number[]): Promise<{ id: number; name: string }[]> {
        try {
            const teams = await this.timeRepository.findByIds(times_id);
            if (!teams || teams.length === 0) {
                throw new AppError("Times não encontrados", 404);
            }
    
            return teams.map(team => ({
                id: team.tim_id,
                name: team.tim_name,
            }));
        } catch (error) {
            console.error(error);
            throw new AppError('Erro ao buscar os times', 500);
        }
    }
}

export { ChaveamentoRepository }
