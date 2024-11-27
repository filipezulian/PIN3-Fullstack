import { EstatisticaTime } from "@modules/rel_EstatisticaTime/entities/EstatisticaTime";
import { TimeJogador } from "@modules/rel_TimeJogador/entities/TimeJogador";
import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('time')
class Time {
  @PrimaryGeneratedColumn()
  tim_id: number;

  @Column({ length: 100 })
  tim_name: string;

  @Column({ length: 100 })
  tim_gender: string;

  @Column()
  tim_owner: number;

  @OneToOne(() => EstatisticaTime, estatistica => estatistica.time)
  estatistica: EstatisticaTime;

  @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tim_owner' })
  time: Time;

  @OneToMany(() => TimeJogador, (timeJogador) => timeJogador.tim_id)
  timeJogador: TimeJogador[];

  constructor() { }
}

export { Time }
