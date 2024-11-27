import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../repository/IJogadorRepository";
import { AppError } from "@config/AppError";

@injectable()
class DeleteJogadorUseCase {
    constructor(
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository
    ) { }

    async execute(id: number, ownerId: number) {
        const jogador = await this.jogadorRepository.jogadorById(id, ownerId);
        console.log(jogador)
        if (jogador) {
            await this.jogadorRepository.delete(jogador);
        }
    }
}

export { DeleteJogadorUseCase }
