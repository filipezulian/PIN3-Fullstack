import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";

@Entity('estatisticajogador')
class EstatisticaJogador {
    @PrimaryGeneratedColumn()
    estjog_id: number;

    @Column()
    camp_vencidos: number;

    @Column()
    qntpartidas: number;

    @Column()
    partidas_vencidas: number;

    @Column()
    qntcamp: number;

    @Column()
    mvp_partidas: number;

    @Column()
    mvp_camp: number;

    @OneToOne(() => Jogador, jogador => jogador.estatistica, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'jogador_id' })
    jogador: Jogador;

    constructor() {
        this.camp_vencidos = 0;
        this.qntpartidas = 0;
        this.partidas_vencidas = 0;
        this.qntcamp = 0;
        this.mvp_partidas = 0;
        this.mvp_camp = 0;
    }
}

export { EstatisticaJogador };