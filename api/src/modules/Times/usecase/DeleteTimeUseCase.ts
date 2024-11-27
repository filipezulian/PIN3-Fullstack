import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";

@injectable()
class DeleteTimeUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository
    ) { }

    async execute(timeId: number) {
        const time = await this.timeRepository.findTimeById(timeId)
        if (time) {
            return await this.timeRepository.delete(time)
        }
    }
}

export { DeleteTimeUseCase }
