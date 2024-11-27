import { AppError } from "@config/AppError";
import { EstatisticaCampeonato } from "../entities/EstatisticaCampeonato";
import { IEstatisticaCampeonatoRepository } from "./IEstatisticaCampeonatoRepository";
import { getRepository, Repository } from "typeorm";
import { ITimeJogadorRepository } from "@modules/rel_TimeJogador/repository/ITimeJogadorRepository";
import { TimeCampeonato } from "@modules/rel_TimeCampeonato/entities/TimeCampeonato";
import { inject, injectable } from "tsyringe";

@injectable()
class EstatisticaCampeonatoRepository implements IEstatisticaCampeonatoRepository {
    private estcampRepository: Repository<EstatisticaCampeonato>
    
    constructor(
        @inject("TimeJogadorRepository")
        private timeJogadorRepository: ITimeJogadorRepository,
    ){
        this.estcampRepository = getRepository(EstatisticaCampeonato);
    }

    async validateExists(camp_id: number) {
        const estatisticaExists = await this.estcampRepository.findOne({where:{camp_id: camp_id}}) 
        if (estatisticaExists) {
            return estatisticaExists
        }
        return false
    }

    async create(camp_id: number, timesCamp: TimeCampeonato[]) {
        try {
            const estatisticas = await this.generateEstatisticas(timesCamp);
            const estatisticaCamp = this.estcampRepository.create({
                camp_id: camp_id,
                rank_jog: estatisticas.jogadores,
                rank_tim: estatisticas.times
            })
            await this.estcampRepository.save(estatisticaCamp);
            return estatisticaCamp;
        } catch (error) {
            console.log(error)
            throw new AppError("Não foi possível gerar estatisticas desse campeonato", 500);
        }
    }

    async generateEstatisticas(timesCamp: TimeCampeonato[]){
        try {
            const jogadores = [];
            const times = [];
            for (const timeCamp of timesCamp) {
                const timeJogadores = await this.timeJogadorRepository.listTimeJogadorByTime(timeCamp.tim_id);
                const formattedJogadores = timeJogadores.map(jogador => ({
                    jog_id: jogador.jog_id,
                    jog_name: jogador.jog_name,
                    mvps: 0
                }));
                times.push(
                    {
                        tim_id: timeCamp.tim_id,
                        partidas: 0,
                        pontos: 0,
                        vencidas: 0,
                        wos: 0
                    }
                )
                jogadores.push(...formattedJogadores);
            }
            return {jogadores, times}
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar os jogadores do time')
        }
    }

}

export { EstatisticaCampeonatoRepository }
