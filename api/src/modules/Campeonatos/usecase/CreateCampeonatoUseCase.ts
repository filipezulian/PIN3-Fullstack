import { AppError } from "@config/AppError";
import { IChaveamentoRepository } from "@modules/Chaveamentos/repository/IChaveamentoRepository";
import { ICampChavRepository } from "@modules/rel_CampeonatoChavemento/repository/ICampChavRepository";
import { IEstatisticaCampeonatoRepository } from "@modules/rel_EstatisticaCampeonato/repository/IEstatisticaCampeonatoRepository";
import { TimeCampeonato } from "@modules/rel_TimeCampeonato/entities/TimeCampeonato";
import { ITimeCampeonatoRepository } from "@modules/rel_TimeCampeonato/repository/ITimeCampeonatoRepository";
import { inject, injectable } from "tsyringe";
import { ICampeonatoRepository } from "../repository/ICampeonatoRepository";
import { CreateCampeonatoDTO } from "../dtos/CreateCampeonatoDTO";

@injectable()
class CreateCampeonatoUseCase {
constructor(
    @inject('CampeonatoRepository')
    private campeonatoRepository: ICampeonatoRepository,
    @inject('ChaveamentoRepository')
    private chaveamentoRepository: IChaveamentoRepository,
    @inject('CampChavRepository')
    private campChavRepository: ICampChavRepository,
    @inject('TimeCampeonatoRepository')
    private timeCampeonatoRepository: ITimeCampeonatoRepository,
    @inject('EstatisticaCampeonatoRepository')
    private estatisticaCampeonatoRepository: IEstatisticaCampeonatoRepository,
){}

    async execute(data: CreateCampeonatoDTO, camp_owner: number){
        try {
            const campeonato = await this.campeonatoRepository.create(data.camp_nome, data.camp_obs, data.esp_id, data.chav_id, camp_owner);
            const timeCamp: TimeCampeonato[] = await this.timeCampeonatoRepository.create(campeonato.camp_id, data.times)
            let estatisticas = await this.estatisticaCampeonatoRepository.validateExists(campeonato.camp_id);
            if (!estatisticas) {
                estatisticas = await this.estatisticaCampeonatoRepository.create(campeonato.camp_id, timeCamp);
            }
            const chaveamentoData = await this.chaveamentoRepository.generateChaveamentoWithIds({chav_id: data.chav_id, times_id: data.times})
            const chavCamp = await this.createChavCamp(campeonato.camp_id, chaveamentoData);
            const campCompleto = {
                camp_id: campeonato.camp_id,
                camp_nome: campeonato.camp_nome,
                camp_obs: campeonato.camp_obs,
                esp_id: campeonato.esp_id,
                rank_tim: estatisticas.rank_tim,
                rank_jog: estatisticas.rank_jog,
                chavCamp
            }
            return campCompleto;
        } catch (error) {
            console.log(error)
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async createChavCamp(camp_id: number, chaveamentoData: any){
        const campExiste = await this.campChavRepository.validateExists(camp_id);
            if (campExiste){
                throw new AppError('Chaveamento ja existe', 401)
            }
            const chavCamp = await this.campChavRepository.create(camp_id, chaveamentoData);
            return chavCamp;
    }

}

export { CreateCampeonatoUseCase }
