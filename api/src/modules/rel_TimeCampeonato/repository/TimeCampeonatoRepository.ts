import { getConnection, getRepository, Repository } from "typeorm";
import { TimeCampeonato } from "../entities/TimeCampeonato";
import { AppError } from "@config/AppError";
import { ITimeCampeonatoRepository } from "./ITimeCampeonatoRepository";

class TimeCampeonatoRepository implements ITimeCampeonatoRepository {
    private timeCampeonatoRepository: Repository<TimeCampeonato>;
    constructor() {
        this.timeCampeonatoRepository = getRepository(TimeCampeonato)
    }

    async create(camp_id: number, times: number[]) {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            const timesCamp = [];
            for (const timeId of times) {
                const timeCamp = queryRunner.manager.create(TimeCampeonato, {
                    tim_id: timeId,
                    camp_id: camp_id
                });
                await queryRunner.manager.save(timeCamp);
                timesCamp.push(timeCamp);
            }
            await queryRunner.commitTransaction();
            return timesCamp;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            console.log(error)
            throw new AppError('Houve um erro ao vincular um time nesse campeonato', 500)
        } finally {
            await queryRunner.release();
        }
    }

}

export { TimeCampeonatoRepository }
