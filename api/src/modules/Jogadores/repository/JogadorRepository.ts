import { AppError } from "@config/AppError";
import { Jogador } from "../entities/Jogador";
import { IJogadorRepository } from "./IJogadorRepository";
import { getManager, getRepository, Repository } from "typeorm";
import { JogadorDTO } from "../dtos/JogadorDTO";
import { EstatisticaJogador } from "@modules/rel_EstatisticaJogador/entities/EstatisticaJogador";

class JogadorRepository implements IJogadorRepository {
    private jogadorRepository: Repository<Jogador>;
    private estatisticaJogadorRepository: Repository<EstatisticaJogador>;

    constructor() {
        this.jogadorRepository = getRepository(Jogador);
        this.estatisticaJogadorRepository = getRepository(EstatisticaJogador);
    }

    async delete(jogador: Jogador) {
        try {
            return await this.jogadorRepository.delete(jogador);
        } catch (error) {
            console.log(error)
            throw new AppError('Ocorreu um erro ao tentar deletar esse Jogador', 401)
        }
    }

    async jogadorById(id: number, ownerId: number) {
        try {
            let jogador: Jogador;
            if (ownerId) {
                jogador = await this.jogadorRepository.findOne({
                    where: {
                        jog_id: id,
                        jog_owner: ownerId
                    }
                });
            } else {
                jogador = await this.jogadorRepository.findOne({
                    where: {
                        jog_id: id,
                    }
                });
            }
            if (jogador) {
                return jogador;
            } else {
                throw new AppError('Jogador não foi encontrado', 404)
            }
        } catch (error) {
            console.log(error)
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async editarJogador(id: number, ownerId: number, name?: string, gender?: string): Promise<JogadorDTO | any> {
        try {
            const jogador = await this.jogadorById(id, ownerId);

            if (!jogador) {
                throw new AppError('Jogador não encontrado', 404);
            }

            const jogadorAtualizado = {
                ...jogador,
                jog_name: name ?? jogador.jog_name,
                jog_gender: gender ?? jogador.jog_gender.toLowerCase(),
            };

            await this.jogadorRepository.save(jogadorAtualizado);

            return {
                id: jogador.jog_id,
                owner: ownerId,
                name: jogadorAtualizado.jog_name,
                gender: jogadorAtualizado.jog_gender.toLowerCase(),
            };
        } catch (error) {
            console.log(error);
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async create(name: string, gender: string, ownerId: number): Promise<JogadorDTO | any> {
        try {
            const jogador = this.jogadorRepository.create({
                jog_name: name,
                jog_gender: gender.toLowerCase(),
                jog_owner: ownerId,
            });

            if (!jogador) {
                throw new AppError("Algo deu errado, tente novamente mais tarde!", 401);
            }

            await this.jogadorRepository.save(jogador);
            return {
                jog_id: jogador.jog_id,
                jog_name: jogador.jog_name,
                jog_gender: jogador.jog_gender.toLowerCase(),
                owner: jogador.jog_owner
            }
        } catch (error) {
            console.log(error)
            throw new AppError(error.message, error.statusCode || 500);
        }
    }
    async listJogadorByOwner(ownerId: number): Promise<Jogador[]> {
        try {
            const jogadores = await this.jogadorRepository.find({
                where: {
                    jog_owner: ownerId
                }
            })

            const finalList = [];
            for (const jogador of jogadores) {
                const estatistica = await this.estatisticaJogadorRepository.findOne({
                    where: {
                        jogador: jogador
                    }
                })

                finalList.push({
                    jog_id: jogador.jog_id,
                    jog_name: jogador.jog_name,
                    jog_gender: jogador.jog_gender,
                    estatistica: {
                        id: estatistica.estjog_id,
                        camp_vencidos: estatistica.camp_vencidos,
                        partidas_vencidas: estatistica.partidas_vencidas,
                        qntcamp: estatistica.qntcamp,
                        qntpartidas: estatistica.qntpartidas,
                        mvp_partidas: estatistica.mvp_partidas,
                        mvp_camp: estatistica.mvp_camp,
                    }
                })
            }
            return finalList;
        } catch (error) {
            console.log(error)
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }

}

export { JogadorRepository }
