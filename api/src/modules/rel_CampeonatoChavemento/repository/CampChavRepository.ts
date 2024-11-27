import { getRepository, Repository } from "typeorm";
import { ICampChavRepository } from "./ICampChavRepository";
import { CampeonatoChaveamento } from "../entities/CampeonatoChaveamento";
import { Campeonato } from "@modules/Campeonatos/entities/Campeonato";
import { AppError } from "@config/AppError";

class CampChavRepository implements ICampChavRepository {
    private campChavRepository: Repository<CampeonatoChaveamento>;
    private campeonatoRepository: Repository<Campeonato>;

    constructor() {
        this.campChavRepository = getRepository(CampeonatoChaveamento);
        this.campeonatoRepository = getRepository(Campeonato);
    }

    async getChaveamentoByCampeonato(camp_id: number) {
        try {
            const chaveamento = await this.campChavRepository.findOne({where:{
                camp_id: camp_id
            }})

            return chaveamento.chaveamento;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possível achar o Chaveamento', 500)
        }
    }

    async validateExists(camp_id: number): Promise<boolean> {
            const campChav = await this.campChavRepository.findOne({ where: { camp_id } });
            return campChav ? true : false;
        }

    async create(camp_id: number, chaveamento: any): Promise<CampeonatoChaveamento>{
        try {
            await this.getCampeonato(camp_id);
            const campChav = this.campChavRepository.create({
                camp_id: camp_id,
                chaveamento: chaveamento
            });
            await this.campChavRepository.save(campChav)
            return campChav; 
        } catch (error) {
            console.log(error)
            throw new AppError('Houve um erro ao criar um chaveamento para o campeonato', 401)
        }
    }

    async getCampeonato(camp_id: number) {
        try {
            return await this.campeonatoRepository.findOne({
                where: {
                    camp_id: camp_id
                }
            })
        } catch (error) {
            console.log(error)
            throw new AppError('Houve um erro ao achar o campeonato', 401)
        }
    }
}

export { CampChavRepository }
