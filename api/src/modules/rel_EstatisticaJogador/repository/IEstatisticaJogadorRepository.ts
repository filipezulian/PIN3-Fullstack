import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { EstatisticaJogador } from "../entities/EstatisticaJogador"
import { EstatisticaJogadorEditDTO } from "../dtos/EstatisticaJogadorEditDTO";

interface IEstatisticaJogadorRepository {
    create(jogador: Jogador): Promise<EstatisticaJogador>;
    getEstatisticaJogadorById(jogadorId: number): Promise<EstatisticaJogador>;
    jogadorExists(jogadorId: number): Promise<Jogador>;
    edit(editInfo: EstatisticaJogadorEditDTO): Promise<EstatisticaJogador>
}

export { IEstatisticaJogadorRepository }
