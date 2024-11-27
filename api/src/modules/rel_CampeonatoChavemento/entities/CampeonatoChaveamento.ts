import { Campeonato } from "@modules/Campeonatos/entities/Campeonato";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('chaveamentocampeonato')
class CampeonatoChaveamento {
    @PrimaryGeneratedColumn()
    chavcamp_id: number;

    @Column()
    camp_id: number;

    @Column({ type: 'jsonb' })
    chaveamento: object;

    @OneToOne(() => Campeonato, campeonato => campeonato.camp_id, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'camp_id' })
    campeonato: Campeonato;

}

export { CampeonatoChaveamento }
