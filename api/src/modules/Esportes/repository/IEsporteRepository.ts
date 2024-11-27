import { Esporte } from "../entities/Esporte";

interface IEsporteRepository {
    listEsportes(): Promise<Esporte[]>;
    getEsporteById(esporteId: number): Promise<Esporte>;
}

export { IEsporteRepository }
