import { CampeonatoChaveamento } from "@modules/rel_CampeonatoChavemento/entities/CampeonatoChaveamento";
import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('campeonato')
class Campeonato {
    @PrimaryGeneratedColumn()
    camp_id: number

    @Column()
    camp_nome: string

    @Column()
    camp_obs: string

    @Column()
    esp_id: number

    @Column()
    chav_id: number

    @Column()
    camp_owner: number

    @Column()
    final_fl: boolean

    @OneToOne(() => CampeonatoChaveamento, campeonatoChaveamento => campeonatoChaveamento.campeonato)
    campeonatoChaveamento: CampeonatoChaveamento;
      
    @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'camp_owner' })
    campeonato: Campeonato;

    constructor(){}

}

export { Campeonato }
