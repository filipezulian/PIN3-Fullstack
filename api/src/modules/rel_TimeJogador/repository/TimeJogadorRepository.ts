import { getConnection, getRepository, Repository } from "typeorm";
import { TimeJogador } from "../entities/TimeJogador";
import { ITimeJogadorRepository } from "./ITimeJogadorRepository";
import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Time } from "@modules/Times/entities/Time";
import { AppError } from "@config/AppError";

class TimeJogadorRepository implements ITimeJogadorRepository {
    private timeJogadorRepository: Repository<TimeJogador>
    private jogadorRepository: Repository<Jogador>
    private timeRepository: Repository<Time>

    constructor() {
        this.timeJogadorRepository = getRepository(TimeJogador)
        this.jogadorRepository = getRepository(Jogador)
        this.timeRepository = getRepository(Time)
    }

    async listTimeJogadorByTime(tim_id: number): Promise<Jogador[]> {
        try {
            const timeJogadores = await this.timeJogadorRepository.find({
                where: {
                    tim_id: tim_id
                }
            });
            const jogadores: Jogador[] = [];
            for (const timeJogador of timeJogadores) {
                jogadores.push(await this.jogadorRepository.findOne({where: {jog_id: timeJogador.jog_id}}))
            }

            return jogadores;
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel encontrar os jogadores desse time', 500)
        }
    }

    async createMultiple(jogadores: number[], tim_id: number): Promise<TimeJogador[]> {
        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            const timeJogadores = [];
            for (const jogadorId of jogadores) {
                const timeJogador = queryRunner.manager.create(TimeJogador, {
                    jog_id: jogadorId,
                    tim_id: tim_id
                });
                await queryRunner.manager.save(TimeJogador, timeJogador);
                timeJogadores.push(timeJogador);
            }
            await queryRunner.commitTransaction();
            return timeJogadores;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            console.error("Transaction failed. Rolling back changes.", error);
        } finally {
            await queryRunner.release();
        }
    }

    listTimeJogador(jog_id: number, tim_id: number): Promise<TimeJogador> {
        try {
            const timeJogador = this.timeJogadorRepository.findOne({
                jog_id: jog_id,
                tim_id: tim_id,
            })
            return timeJogador
        } catch (error) {
            console.log(error)
            throw new AppError('Este jogador não esta nesse time')
        }
    }

    async create(jog_id: number, tim_id: number): Promise<TimeJogador> {
        try {
            const time = await this.timeRepository.find({
                where: {
                    tim_id: tim_id
                }
            });

            const jogador = this.jogadorRepository.find({
                where: {
                    jog_id: jog_id
                }
            });

            let timeJogador;
            if (jogador && time) {
                timeJogador = this.timeJogadorRepository.create({
                    jog_id: jog_id,
                    tim_id: tim_id,
                })
            }
            await this.timeJogadorRepository.save(timeJogador);
            return timeJogador;
        } catch (error) {
            console.log(error)
            throw new AppError('Houve um erro ao alocar jogador(a) no time')
        }
    }

}

export { TimeJogadorRepository }
