import { getRepository, Repository } from "typeorm";
import { EstatisticaJogador } from "../entities/EstatisticaJogador";
import { IEstatisticaJogadorRepository } from "./IEstatisticaJogadorRepository";
import { AppError } from "@config/AppError";
import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { EstatisticaJogadorEditDTO } from "../dtos/EstatisticaJogadorEditDTO";

class EstatisticaJogadorRepository implements IEstatisticaJogadorRepository {
    private estatisticaJogadorRepository: Repository<EstatisticaJogador>;
    private jogadorRepository: Repository<Jogador>;

    constructor() {
        this.estatisticaJogadorRepository = getRepository(EstatisticaJogador);
        this.jogadorRepository = getRepository(Jogador);
    }

    async edit(editInfo: EstatisticaJogadorEditDTO): Promise<EstatisticaJogador> {
        try {
            const atualEstatistica = await this.getEstatisticaJogadorById(editInfo.jogadorId);

            const estatisticaAtualizada = {
                ...atualEstatistica,
                camp_vencidos: editInfo.camp_vencidos ?? atualEstatistica.camp_vencidos,
                qntpartidas: editInfo.qntpartidas ?? atualEstatistica.qntpartidas,
                partidas_vencidas: editInfo.partidas_vencidas ?? atualEstatistica.partidas_vencidas,
                qntcamp: editInfo.qntcamp ?? atualEstatistica.qntcamp,
                mvp_partidas: editInfo.mvp_partidas ?? atualEstatistica.mvp_partidas,
                mvp_camp: editInfo.mvp_camp ?? atualEstatistica.mvp_camp,
            };

            await this.estatisticaJogadorRepository.save(estatisticaAtualizada);
            return estatisticaAtualizada;
        } catch (error) {
            console.log(error)
            throw new AppError("Houve um erro ao editar a estatística", 500);
        }
    }

    async jogadorExists(jogadorId: number): Promise<Jogador> {
        try {
            return await this.jogadorRepository.findOne({
                where: {
                    jog_id: jogadorId
                }
            })
        } catch (error) {
            console.log(error);
            throw new AppError('Houve um erro, tente novamente mais tarde', 500)
        }
    }

    async create(jogador: Jogador): Promise<EstatisticaJogador> {
        try {
            if (jogador) {
                const estatistica = this.estatisticaJogadorRepository.create({
                    jogador: jogador,
                    camp_vencidos: 0,
                    qntpartidas: 0,
                    partidas_vencidas: 0,
                    qntcamp: 0,
                    mvp_partidas: 0,
                    mvp_camp: 0
                })
                return await this.estatisticaJogadorRepository.save(estatistica);
            } else {
                throw new AppError('Houve um erro no processo de criar um jogador', 401)
            }
        } catch (error) {
            console.log(error);
            throw new AppError('Houve um erro no processo de criar um jogador', 401)
        }
    }

    async getEstatisticaJogadorById(jogadorId: number): Promise<EstatisticaJogador> {
        try {
            return await this.estatisticaJogadorRepository.findOne({where: {
                jogador: jogadorId
            }})
        } catch (error) {
            console.log(error)
            throw new AppError('Houve um erro ao buscar as estatísticas do jogador', 500)
        }
    }

}

export { EstatisticaJogadorRepository }
