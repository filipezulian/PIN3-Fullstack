import { inject, injectable } from "tsyringe";
import { ITimeJogadorRepository } from "../repository/ITimeJogadorRepository";
import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";
import { ITimeRepository } from "@modules/Times/repository/ITimeRepository";
import { AppError } from "@config/AppError";
import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Time } from "@modules/Times/entities/Time";
import { Gender } from "utils/Gender";

@injectable()
class CreateMultipleTimeJogadoresUseCase {
    constructor(
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository,
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository,
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
    ) { }

    async execute(jogadores: number[], tim_id: number) {
        await this.validateConditions(jogadores, tim_id)
        return await this.timeJogadorRepository.createMultiple(jogadores, tim_id)
    };
    
    async validateConditions(jogadores: number[], tim_id: number){
        const time = await this.timeRepository.findTimeById(tim_id)
        for (let jogadorId of jogadores) {
            const jogador = await this.jogadorRepository.jogadorById(jogadorId);
            await this.validateJogadorTime(jogadorId, tim_id);
            this.validateGenders(jogador, time);
        }
    };
    
    async validateJogadorTime(jogadorId: number, tim_id: number) {
        if (await this.timeJogadorRepository.listTimeJogador(jogadorId, tim_id)) {
            throw new AppError('Jogador(a) ja está nesse time', 400);
        }
    };

    validateGenders(jogador: Jogador, time: Time) {
        if (time.tim_gender == Gender.MISTO) {
            return
        }
        if (jogador.jog_gender !== time.tim_gender) {
            throw new AppError(`${time.tim_name} e ${jogador.jog_name} são de genêros diferente`, 400)
        }
    };
}

export { CreateMultipleTimeJogadoresUseCase }
