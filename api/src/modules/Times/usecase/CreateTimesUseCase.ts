import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";
import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { IEstatisticaTimeRepository } from "@modules/rel_EstatisticaTime/repository/IEstatisticaTimeRepository";
import { ITimeJogadorRepository } from "@modules/rel_TimeJogador/repository/ITimeJogadorRepository";

@injectable()
class CreateTimeUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
        @inject('EstatisticaTimeRepository')
        private estatisticaTimeRepository: IEstatisticaTimeRepository,
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository,
    ) { }

    async execute(infoCreate: CreateTimeDTO) {
        const time = await this.timeRepository.create(infoCreate);
        const estatistica = await this.estatisticaTimeRepository.create(time);
        await this.timeJogadorRepository.createMultiple(infoCreate.times, time.tim_id)

        return {
            id: time.tim_id,
            name: time.tim_name,
            gender: time.tim_gender,
            estatistica: {
                id: estatistica.esttim_id,
                qntCamp: estatistica.qntcamp,
                camp_vencidos: estatistica.camp_vencidos,
                qntPartidas: estatistica.qntpartidas,
                partidas_vencidas: estatistica.partidas_vencidas,
            }
        };
    }

}

export { CreateTimeUseCase }
