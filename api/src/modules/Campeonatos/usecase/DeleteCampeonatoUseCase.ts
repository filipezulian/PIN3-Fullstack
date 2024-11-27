import { inject, injectable } from "tsyringe";
import { ICampeonatoRepository } from "../repository/ICampeonatoRepository";
import { AppError } from "@config/AppError";

@injectable()
class DeleteCampeonatoUseCase {
    constructor (
        @inject('CampeonatoRepository')
        private campeonatoRepository: ICampeonatoRepository 
    ) {}

    async execute(camp_id: number){
        const campeonato = await this.campeonatoRepository.findCampeonatoById(camp_id);
        if (!campeonato) {
            throw new AppError('Esse campeonato não existe', 404)
        }
        return await this.campeonatoRepository.delete(campeonato);
    }
}

export { DeleteCampeonatoUseCase }
