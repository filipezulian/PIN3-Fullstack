import { Campeonato } from "@modules/Campeonatos/entities/Campeonato";
import { Time } from "@modules/Times/entities/Time";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('timecampeonato')
class TimeCampeonato {
    @PrimaryGeneratedColumn()
    timcamp_id: number;

    @Column()
    camp_id: number;

    @Column()
    tim_id: number;

    @OneToOne(() => Campeonato, campeonato => campeonato.camp_id, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'camp_id' })
    campeonato: Campeonato;

    @OneToOne(() => Time, time => time.tim_id, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'tim_id' })
    time: Time;

}

export { TimeCampeonato }
