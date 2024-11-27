import { ITimeRepository } from "@modules/Times/repository/ITimeRepository";
import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../../Jogadores/repository/IJogadorRepository";
import { ITimeJogadorRepository } from "@modules/rel_TimeJogador/repository/ITimeJogadorRepository";
import { IEstatisticaJogadorRepository } from "@modules/rel_EstatisticaJogador/repository/IEstatisticaJogadorRepository";

@injectable()
class ListJogadorByTimeUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository,
        @inject('EstatisticaJogadorRepository')
        private estatisticaJogadorRepository: IEstatisticaJogadorRepository,
    ) { }

    async execute(time_id: number) {
        await this.timeRepository.findTimeById(time_id);
        const jogadores = await this.timeJogadorRepository.listTimeJogadorByTime(time_id);
        const jogadorEstatistica = [];
        for (const jogador of jogadores) {
            const estatistica = await this.estatisticaJogadorRepository.getEstatisticaJogadorById(jogador.jog_id);
            jogadorEstatistica.push({
                jog_id: jogador.jog_id,
                jog_name: jogador.jog_name,
                jog_gender: jogador.jog_gender,
                estatistica: estatistica
            })
        }
        return jogadorEstatistica
    }
}

export { ListJogadorByTimeUseCase }
