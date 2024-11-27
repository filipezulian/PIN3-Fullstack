import { TimeCampeonato } from "@modules/rel_TimeCampeonato/entities/TimeCampeonato"

interface IEstatisticaCampeonatoRepository {
    create(camp_id: number, timesCamp: TimeCampeonato[])
    validateExists(camp_id: number)
}

export { IEstatisticaCampeonatoRepository }