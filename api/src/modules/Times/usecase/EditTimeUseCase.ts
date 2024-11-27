import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";
import { EditTimeDTO } from "../dtos/EditTimeDTO";

@injectable()
class EditTimeUseCase {
    constructor(
        @inject('TimeRepository')
        private editTimeRepository: ITimeRepository
    ) { }

    async execute(editInfo: EditTimeDTO) {
        if (await this.editTimeRepository.findTimeById(editInfo.tim_id)) {
            return await this.editTimeRepository.edit(editInfo);
        }
    }

}

export { EditTimeUseCase }
