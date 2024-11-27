import { Jogador } from "../entities/Jogador"
import { JogadorDTO } from "../dtos/JogadorDTO";

interface IJogadorRepository {
    create(name: string, gender: string, owner: number): Promise<JogadorDTO | any>;
    listJogadorByOwner(ownerId: number): Promise<Jogador[]>;
    editarJogador(id: number, ownerId: number, name?: string, gender?: string): Promise<JogadorDTO| any>;
    jogadorById(id: number, ownerId?: number): Promise<any>;
    delete(jogador: any);
}

export { IJogadorRepository }
