import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Time } from "@modules/Times/entities/Time";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('timejogador')
class TimeJogador {
    @PrimaryGeneratedColumn()
    timjog_id: number;

    @Column()
    tim_id: number;

    @Column()
    jog_id: number;

    @ManyToOne(() => Time, time => time.tim_id, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'tim_id' })
    timeJogador: TimeJogador;

    @ManyToOne(() => Jogador, jogador => jogador.jog_id, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'jog_id' })
    jogadorTime: TimeJogador;


    constructor() { }
}

export { TimeJogador }
