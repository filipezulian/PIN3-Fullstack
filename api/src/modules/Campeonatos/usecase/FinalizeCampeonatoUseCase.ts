import { inject, injectable } from "tsyringe";
import { CampeonatoRepository } from "../repository/CampeonatoRepository";
import { ICampChavRepository } from "@modules/rel_CampeonatoChavemento/repository/ICampChavRepository";
import { IEstatisticaCampeonatoRepository } from "@modules/rel_EstatisticaCampeonato/repository/IEstatisticaCampeonatoRepository";

@injectable()
class FinalizeCampeonatoUseCase {
    constructor(
        @inject('CampeonatoRepository')
        private campeonatoRepository: CampeonatoRepository,
        @inject('CampChavRepository')
        private campChavRepository: ICampChavRepository,
        @inject('EstatisticaCampeonatoRepository')
        private estatisticaCampeonato: IEstatisticaCampeonatoRepository
    ){}

    async execute(camp_id: number){
        const campeonato = await this.campeonatoRepository.findCampeonatoById(camp_id);
        const estatistica = await this.estatisticaCampeonato.validateExists(camp_id);
        const chaveamento = await this.campChavRepository.getChaveamentoByCampeonato(camp_id);

        

    }
}

export { FinalizeCampeonatoUseCase }
