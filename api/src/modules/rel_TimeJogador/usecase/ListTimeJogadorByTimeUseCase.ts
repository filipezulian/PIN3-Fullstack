import { inject, injectable } from "tsyringe";
import { ITimeJogadorRepository } from "../repository/ITimeJogadorRepository";

@injectable()
class ListTimeJogadorByTimeUseCase {
    constructor(
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository
    ){}
    async execute(tim_id: number){
        return await this.timeJogadorRepository.listTimeJogadorByTime(tim_id);
    }
}

export { ListTimeJogadorByTimeUseCase }
