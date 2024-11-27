import { getRepository, Repository } from "typeorm";
import { Esporte } from "../entities/Esporte";
import { IEsporteRepository } from "./IEsporteRepository";
import { AppError } from "@config/AppError";

class EsporteRepository implements IEsporteRepository {
    private esporteRepository: Repository<Esporte>

    constructor(){
        this.esporteRepository = getRepository(Esporte);
    }

    async getEsporteById(esporteId: number): Promise<Esporte> {
        try {
            return await this.esporteRepository.findOne({
                where: {
                    esp_id: esporteId
                }
            }) 
        } catch (error) {
            console.log(error)
            throw new AppError('Ocorreu um erro, tente novamente mais tarde', 500)
        }
    }

    async listEsportes(): Promise<Esporte[]> {
        try {
            return await this.esporteRepository.find() || [];
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível listar esportes', 500)
        }
    }

}

export { EsporteRepository }