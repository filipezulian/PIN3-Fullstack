import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('chaveamento')
class Chaveamento {
    @PrimaryGeneratedColumn()
    chav_id: number;

    @Column({ length: 100 })
    chav_name: string;

    @Column()
    minlimit: number;

    @Column()
    maxlimit: number;

    constructor() { }
}

export { Chaveamento };