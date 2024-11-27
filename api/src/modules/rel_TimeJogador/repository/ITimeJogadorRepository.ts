import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { TimeJogador } from "../entities/TimeJogador"

interface ITimeJogadorRepository {
    create(jog_id: number, tim_id: number): Promise<TimeJogador>;
    listTimeJogador(jog_id: number, tim_id: number): Promise<TimeJogador>
    createMultiple(jogadores: number[], tim_id: number): Promise<TimeJogador[]>
    listTimeJogadorByTime(tim_id: number): Promise<Jogador[]>
}

export { ITimeJogadorRepository }
