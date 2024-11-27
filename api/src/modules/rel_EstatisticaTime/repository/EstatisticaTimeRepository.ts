import { AppError } from "@config/AppError";
import { EstatisticaTime } from "../entities/EstatisticaTime";
import { IEstatisticaTimeRepository } from "./IEstatisticaTimeRepository";
import { Time } from "@modules/Times/entities/Time";
import { getRepository, Repository } from "typeorm";
import { EstatisticaTimeDTO } from "../dtos/EstatisticaTimeDTO";

class EstatisticaTimeRepository implements IEstatisticaTimeRepository {
    private estatisticaTimeRepository: Repository<EstatisticaTime>;
    private timeRepository: Repository<Time>;

    constructor() {
        this.estatisticaTimeRepository = getRepository(EstatisticaTime);
        this.timeRepository = getRepository(Time);
    }

    async edit(editInfo: EstatisticaTimeDTO): Promise<EstatisticaTime> {
        try {
            const atualEstatistica = await this.listByTime(editInfo.timeId);

            const estatisticaAtualizada = {
                ...atualEstatistica,
                camp_vencidos: editInfo.camp_vencidos ?? atualEstatistica.camp_vencidos,
                qntpartidas: editInfo.qntpartidas ?? atualEstatistica.qntpartidas,
                partidas_vencidas: editInfo.partidas_vencidas ?? atualEstatistica.partidas_vencidas,
                qntcamp: editInfo.qntcamp ?? atualEstatistica.qntcamp,
            };

            await this.estatisticaTimeRepository.save(estatisticaAtualizada);
            return estatisticaAtualizada;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel alterar as estatísticas do time', 500)
        }
    }

    async listByTime(timeId: number): Promise<EstatisticaTime> {
        try {
            return await this.estatisticaTimeRepository.findOne({
                where: {
                    time: timeId
                }
            })
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel retornar a estatística do time', 500)
        }
    }

    async create(time: Time): Promise<EstatisticaTime> {
        try {
            if (time) {
                const estatistica = this.estatisticaTimeRepository.create({
                    time: time,
                    camp_vencidos: 0,
                    qntpartidas: 0,
                    partidas_vencidas: 0,
                    qntcamp: 0
                })
                return await this.estatisticaTimeRepository.save(estatistica);
            } else {
                throw new AppError('Houve um erro no processo de criar um Time', 401)
            }
        } catch (error) {
            console.log(error);
            throw new AppError('Houve um erro no processo de criar um Time', 401)
        }
    }

    async timeExiste(timeId: number): Promise<Time> {
        try {
            return await this.timeRepository.findOne({
                where: {
                    tim_id: timeId
                }
            });
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel achar o time', 500)
        }
    }

}

export { EstatisticaTimeRepository }
