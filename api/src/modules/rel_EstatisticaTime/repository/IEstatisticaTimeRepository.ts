import { Time } from "@modules/Times/entities/Time";
import { EstatisticaTime } from "../entities/EstatisticaTime";
import { EstatisticaTimeDTO } from "../dtos/EstatisticaTimeDTO";

interface IEstatisticaTimeRepository {
    create(time: Time): Promise<EstatisticaTime>;
    listByTime(timeId: number): Promise<EstatisticaTime>;
    timeExiste(timeId: number): Promise<Time>;
    edit(editInfo: EstatisticaTimeDTO): Promise<EstatisticaTime>;
}

export { IEstatisticaTimeRepository }
