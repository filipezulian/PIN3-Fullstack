import { inject, injectable } from "tsyringe";
import { EstatisticaJogadorRepository } from "../repository/EstatisticaJogadorRepository";
import { Jogador } from "@modules/Jogadores/entities/Jogador";

@injectable()
class CreateEstatisticaJogadorUseCase {
    constructor(
        @inject('EstatisticaJogadorRepository')
        private estatisticaJogadorRepository: EstatisticaJogadorRepository
    ){}

    async execute(jogador: Jogador) {
        return await this.estatisticaJogadorRepository.create(jogador);
    }

}

export { CreateEstatisticaJogadorUseCase }
