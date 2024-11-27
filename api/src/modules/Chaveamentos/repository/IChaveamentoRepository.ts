import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";
import { Chaveamento } from "../entities/Chaveamento";

interface IChaveamentoRepository {
    listChaveamento(): Promise<Chaveamento[]>;
    getChaveamentoById(chav_id: number): Promise<Chaveamento>;
    gerarChaveamento(data: CriarChaveamentoDTO);
    generateChaveamentoWithIds({ chav_id, name, times_id }: { chav_id: number; name?: string; times_id: number[] });
}

export { IChaveamentoRepository }
