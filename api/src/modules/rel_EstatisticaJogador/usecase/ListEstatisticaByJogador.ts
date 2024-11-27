import { inject, injectable } from "tsyringe";
import { IEstatisticaJogadorRepository } from "../repository/IEstatisticaJogadorRepository";

@injectable()
class ListEstatisticaByJogador {
    constructor(
        @inject('EstatisticaJogadorRepository')
        private estatisticaRepository: IEstatisticaJogadorRepository
    ) {}

    async execute(jogadorId: number) {
        if (await this.estatisticaRepository.jogadorExists(jogadorId)) {
            return await this.estatisticaRepository.getEstatisticaJogadorById(jogadorId);
        }
    }

}

export { ListEstatisticaByJogador }
