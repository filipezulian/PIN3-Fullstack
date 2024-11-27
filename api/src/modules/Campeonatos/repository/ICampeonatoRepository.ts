import { Campeonato } from "../entities/Campeonato";

interface ICampeonatoRepository {
    create(camp_nome: string, camp_obs: string, esp_id: number, chav_id: number, camp_owner: number): Promise<Campeonato>
    edit(campeonato: Campeonato, camp_nome: string, camp_obs: string): Promise<Campeonato>
    findCampeonatoById(camp_id: number): Promise<Campeonato>;
    delete(campeonato: Campeonato);
}

export { ICampeonatoRepository }
