import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../repository/IJogadorRepository";
import { AppError } from "@config/AppError";

@injectable()
class EditJogadorUseCase {
constructor(
    @inject('JogadorRepository')
    private jogadorRepository: IJogadorRepository
){}

async execute(id: number, name: string, gender: string, ownerId){
    const jogador = this.jogadorRepository.jogadorById(id, ownerId);
    if(jogador){
        return await this.jogadorRepository.editarJogador(id, ownerId, name, gender)
    } else {
        throw new AppError('Esse jogador não foi achado!', 404)
    }
}

}

export { EditJogadorUseCase }
