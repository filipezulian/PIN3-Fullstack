import { inject, injectable } from "tsyringe";
import { ICampeonatoRepository } from "../repository/ICampeonatoRepository";

@injectable()
class EditCampeonatoUseCase { 
    constructor(
        @inject('CampeonatoRepository')
        private campeonatoRepository: ICampeonatoRepository
    ){}

    async execute(camp_id: number, camp_name: string, camp_obs: string) {
        const campeonato = await this.campeonatoRepository.findCampeonatoById(camp_id);
        const editedCampeonato = await this.campeonatoRepository.edit(campeonato, camp_name, camp_obs);
        return editedCampeonato;
    }
}

export { EditCampeonatoUseCase }
