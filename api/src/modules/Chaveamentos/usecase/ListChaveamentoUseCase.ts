import { inject, injectable } from "tsyringe";
import { IChaveamentoRepository } from "../repository/IChaveamentoRepository";

@injectable()
class ListChaveamentoUseCase {
    constructor(
        @inject('ChaveamentoRepository')
        private chaveamentoRepository: IChaveamentoRepository
    ) { }

    async execute(){
        return await this.chaveamentoRepository.listChaveamento();
    }

    
}

export { ListChaveamentoUseCase }
