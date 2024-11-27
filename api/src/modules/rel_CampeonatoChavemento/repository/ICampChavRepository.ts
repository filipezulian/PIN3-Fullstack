import { CampeonatoChaveamento } from "../entities/CampeonatoChaveamento";

interface ICampChavRepository {
    create(camp_id: number, chaveamento: any): Promise<CampeonatoChaveamento>;
    validateExists(camp_id: number): Promise<boolean>;
    getCampeonato(camp_id: number);
    getChaveamentoByCampeonato(camp_id: number);
}

export { ICampChavRepository }
