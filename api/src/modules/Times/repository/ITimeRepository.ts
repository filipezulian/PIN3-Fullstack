import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { EditTimeDTO } from "../dtos/EditTimeDTO";
import { Time } from "../entities/Time";

interface ITimeRepository {
    create(infoCreate: CreateTimeDTO);
    findTimeById(timeId: number);
    delete(time: Time);
    listByUsuario(usuarioId: number)
    edit(editInfo: EditTimeDTO): Promise<EditTimeDTO | any>
    generateTimes(jogadores: number[], amountTimes: number, playersPerTeam: number);
    generateTimesMisto(jogadores: number[], amountTimes: number, playersPerTeam: number);
}

export { ITimeRepository }
