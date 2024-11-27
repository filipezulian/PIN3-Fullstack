import { Campeonato } from "@modules/Campeonatos/entities/Campeonato";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('estatisticacampeonato')
class EstatisticaCampeonato{
    @PrimaryGeneratedColumn()
    estcamp_id: number

    @Column({type: 'jsonb'})
    rank_tim: object

    @Column({type: 'jsonb'})
    rank_jog: object
    
    @Column()
    camp_id: number

    @OneToOne(() => Campeonato, campeonato => campeonato.camp_id, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'camp_id' })
    campeonato: Campeonato;
}

export { EstatisticaCampeonato }