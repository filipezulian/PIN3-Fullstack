import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('esporte')
class Esporte {
    @PrimaryGeneratedColumn()
    esp_id: number;

    @Column({ length: 100 })
    esp_name: string;

    @Column()
    qntjogadorportime: number;

    constructor() { }
}

export { Esporte }
