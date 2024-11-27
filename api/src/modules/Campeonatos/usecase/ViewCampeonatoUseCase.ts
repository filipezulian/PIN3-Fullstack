import { inject, injectable } from "tsyringe";
import { ICampeonatoRepository } from "../repository/ICampeonatoRepository";
import { IEstatisticaCampeonatoRepository } from "@modules/rel_EstatisticaCampeonato/repository/IEstatisticaCampeonatoRepository";
import { ICampChavRepository } from "@modules/rel_CampeonatoChavemento/repository/ICampChavRepository";

@injectable()
class ViewCampeonatoUseCase {
    constructor(
        @inject('CampeonatoRepository')
        private campeonatoRepository: ICampeonatoRepository,
        @inject('CampChavRepository')
        private campChavRepository: ICampChavRepository,
        @inject('EstatisticaCampeonatoRepository')
        private estatisticaCampeonato: IEstatisticaCampeonatoRepository
    ) { }

    async execute(camp_id: number) {
        const campeonato = await this.campeonatoRepository.findCampeonatoById(camp_id);
        const estatistica = await this.estatisticaCampeonato.validateExists(camp_id);
        const chaveamento = await this.campChavRepository.getChaveamentoByCampeonato(camp_id);
        return {
            campeonato,
            estatistica,
            chaveamento: chaveamento
        }
    }
}

export { ViewCampeonatoUseCase }
