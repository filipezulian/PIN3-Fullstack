import { getRepository, Repository } from "typeorm";
import { ICampeonatoRepository } from "./ICampeonatoRepository";
import { Campeonato } from "../entities/Campeonato";
import { AppError } from "@config/AppError";

class CampeonatoRepository implements ICampeonatoRepository {
    private campeonatoRepository: Repository<Campeonato>

    constructor(){
        this.campeonatoRepository = getRepository(Campeonato);
    }

    async delete(campeonato: Campeonato) {
        try {
            await this.campeonatoRepository.delete(campeonato);
            return {message: 'Campeonato deletado com sucesso'}
        } catch (error) {
            console.log(error);
            throw new AppError('Não foi possível deletar o campeonato', 500)
        }
    }
    async edit(campeonato: Campeonato, camp_nome: string, camp_obs: string): Promise<Campeonato> {
        try {
            const editedCampeonato = {
                ...campeonato,
                camp_nome: camp_nome ?? campeonato.camp_nome,
                camp_obs: camp_obs ?? campeonato.camp_obs,
            }
            await this.campeonatoRepository.save(editedCampeonato);
            return editedCampeonato
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível editar o campeonato', 500)
        }
    }

    async findCampeonatoById(camp_id: number): Promise<Campeonato> {
        try {
            const camp = await this.campeonatoRepository.findOne({
                where: {
                    camp_id: camp_id
                }
            })
            return camp;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar esse campeonato', 500)
        }
    }
    async create(camp_nome: string, camp_obs: string, esp_id: number, chav_id: number, camp_owner: number): Promise<Campeonato> {
        try {
            const campeonato = this.campeonatoRepository.create({
                camp_nome,
                camp_obs,
                esp_id,
                chav_id,
                camp_owner
            })  
            await this.campeonatoRepository.save(campeonato);
            return campeonato;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível criar o campeonato', 500)
        }
    }

}

export { CampeonatoRepository }