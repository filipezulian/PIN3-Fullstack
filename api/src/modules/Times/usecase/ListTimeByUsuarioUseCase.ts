import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";

@injectable()
class ListTimeByUsuarioUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository
    ) { }

    async execute(usuarioId: number){
        return await this.timeRepository.listByUsuario(usuarioId);
    }

}

export { ListTimeByUsuarioUseCase }
