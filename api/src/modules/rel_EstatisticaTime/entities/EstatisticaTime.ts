import { Time } from "@modules/Times/entities/Time";
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";

@Entity('estatisticatime')
class EstatisticaTime {
    @PrimaryGeneratedColumn()
    esttim_id: number;

    @Column()
    camp_vencidos: number;

    @Column()
    qntpartidas: number;

    @Column()
    partidas_vencidas: number;

    @Column()
    qntcamp: number;
    
    @OneToOne(() => Time, time => time.estatistica, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'time_id' })
    time: Time;

    constructor() {
        this.camp_vencidos = 0;
        this.qntpartidas = 0;
        this.partidas_vencidas = 0;
        this.qntcamp = 0;
    }
}

export { EstatisticaTime };