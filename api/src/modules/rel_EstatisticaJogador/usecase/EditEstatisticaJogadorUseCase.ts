import { inject, injectable } from "tsyringe";
import { IEstatisticaJogadorRepository } from "../repository/IEstatisticaJogadorRepository";
import { EstatisticaJogadorEditDTO } from "../dtos/EstatisticaJogadorEditDTO";

@injectable()
class EditEstatisticaJogadorUseCase {
    constructor(
        @inject('EstatisticaJogadorRepository')
        private estatisticaRepository: IEstatisticaJogadorRepository
    ) {}

    async execute( editInfo: EstatisticaJogadorEditDTO ) {
        if (await this.estatisticaRepository.jogadorExists(editInfo.jogadorId)) {
            return await this.estatisticaRepository.edit(editInfo);
        }
    }

}

export { EditEstatisticaJogadorUseCase }
