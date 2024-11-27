import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../repository/IJogadorRepository";
import { AppError } from "@config/AppError";
import { EstatisticaJogadorRepository } from "@modules/rel_EstatisticaJogador/repository/EstatisticaJogadorRepository";

@injectable()
class CreateJogadorUseCase {
    constructor(
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository,
        @inject('EstatisticaJogadorRepository')
        private estatisticaJogadorRepository: EstatisticaJogadorRepository
    ) { }

    async execute(name: string, gender: string, owner: number) {
        const jogador = await this.jogadorRepository.create(name, gender, owner);
        if (!jogador) {
            throw new AppError('There was an error creating a new Jogador', 401)
        }

        const estatistica = await this.estatisticaJogadorRepository.create(jogador);

        return {
            id: jogador.jog_id,
            name: jogador.jog_name,
            gender: jogador.jog_gender,
            estatistica: {
                id: estatistica.estjog_id,
                qntCamp: estatistica.qntcamp,
                camp_vencidos: estatistica.camp_vencidos,
                mvp_camp: estatistica.mvp_camp,
                qntPartidas: estatistica.qntpartidas,
                partidas_vencidas: estatistica.partidas_vencidas,
                mvp_partidas: estatistica.mvp_partidas,
            }
        };
    }
}

export { CreateJogadorUseCase }
