import { inject, injectable } from "tsyringe";
import { IJogadorRepository } from "../repository/IJogadorRepository";

@injectable()
class ListJogadorByOwnerUseCase {
constructor(
    @inject('JogadorRepository')
    private jogadorRepository: IJogadorRepository
){}

async execute(ownerId: number){
    return await this.jogadorRepository.listJogadorByOwner(ownerId); 
}

}

export { ListJogadorByOwnerUseCase }
