import { inject, injectable } from "tsyringe";
import { IEstatisticaTimeRepository } from "../repository/IEstatisticaTimeRepository";
import { AppError } from "@config/AppError";

@injectable()
class ListEstatisticaByTimeUseCase {
    constructor(
        @inject('EstatisticaTimeRepository')
        private estatisticaTimeRepository: IEstatisticaTimeRepository
    ) { }

    async execute(timeId: number) {
        if (await this.estatisticaTimeRepository.timeExiste(timeId)) {
            return await this.estatisticaTimeRepository.listByTime(timeId);
        }
    }

}
export { ListEstatisticaByTimeUseCase }
