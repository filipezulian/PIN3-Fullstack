import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";
import { IEstatisticaTimeRepository } from "@modules/rel_EstatisticaTime/repository/IEstatisticaTimeRepository";
import { ITimeJogadorRepository } from "@modules/rel_TimeJogador/repository/ITimeJogadorRepository";

@injectable()
class CreateMultipleTimeUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
        @inject('EstatisticaTimeRepository')
        private estatisticaTimeRepository: IEstatisticaTimeRepository,
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository,
    ) { }

    async execute(userId, {times}) {
        console.log('forhonoer',times)
        for (const time of times) {
            const timeGerado = await this.timeRepository.create({
                tim_owner: userId,
                tim_gender: time.tim_gender,
                tim_name: time.tim_name,
                times: time.jogadores
            });
            await this.estatisticaTimeRepository.create(timeGerado);
            await this.timeJogadorRepository.createMultiple(time.jogadores, timeGerado.tim_id)
        }
        // return {message: 'Times gerado com sucesso'}
    }
}

export { CreateMultipleTimeUseCase }
