import { inject, injectable } from "tsyringe";
import { IEstatisticaTimeRepository } from "../repository/IEstatisticaTimeRepository";
import { EstatisticaTimeDTO } from "../dtos/EstatisticaTimeDTO";

@injectable()
class EditEstatisticaTimeUseCase {
    constructor(
        @inject('EstatisticaTimeRepository')
        private estatisticaRepository: IEstatisticaTimeRepository
    ){}

    async execute(editInfo: EstatisticaTimeDTO){
        if(await this.estatisticaRepository.timeExiste(editInfo.timeId)){
           return await this.estatisticaRepository.edit(editInfo);
        }
    }
}

export { EditEstatisticaTimeUseCase }
