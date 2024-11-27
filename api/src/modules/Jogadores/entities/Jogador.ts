import { EstatisticaJogador } from "@modules/rel_EstatisticaJogador/entities/EstatisticaJogador";
import { TimeJogador } from "@modules/rel_TimeJogador/entities/TimeJogador";
import { Usuario } from "@modules/Users/entities/Usuario";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('jogador')
class Jogador {
  @PrimaryGeneratedColumn()
  jog_id: number;

  @Column({ length: 100 })
  jog_name: string;

  @Column({ length: 10 })
  jog_gender: string;

  @Column({ unique: false })
  jog_owner: number;

  @OneToOne(() => EstatisticaJogador, estatistica => estatistica.jogador)
  estatistica: EstatisticaJogador;

  @ManyToOne(() => Usuario, usuario => usuario.usr_id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'jog_owner' })
  jogador: Jogador;

  @OneToMany(() => TimeJogador, (timeJogador) => timeJogador.jog_id)
  timeJogador: TimeJogador[];

  constructor() { }
}

export { Jogador }
