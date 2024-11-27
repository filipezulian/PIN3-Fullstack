import { inject, injectable } from "tsyringe";
import { ITimeJogadorRepository } from "../repository/ITimeJogadorRepository";
import { ITimeRepository } from "@modules/Times/repository/ITimeRepository";
import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";
import { Jogador } from "@modules/Jogadores/entities/Jogador";
import { Time } from "@modules/Times/entities/Time";
import { Gender } from "utils/Gender";
import { AppError } from "@config/AppError";

@injectable()
class CreateTimeJogadorUseCase {
    constructor(
        @inject('TimeJogadorRepository')
        private timeJogadorRepository: ITimeJogadorRepository,
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository,
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
    ){}

async execute(jog_id: number, tim_id: number){
    const jogador = await this.jogadorRepository.jogadorById(jog_id);
    const time = await this.timeRepository.findTimeById(tim_id);
    this.validateGenders(jogador, time);
    if (await this.timeJogadorRepository.listTimeJogador(jog_id, tim_id)){
        throw new AppError('Jogador(a) ja está nesse time', 400);
    }
    return await this.timeJogadorRepository.create(jog_id, tim_id);
}

validateGenders(jogador: Jogador, time: Time) {
    if (time.tim_gender == Gender.MISTO) {
        return
    }
    if (jogador.jog_gender !== time.tim_gender) {
        throw new AppError(`${time.tim_name} e ${jogador.jog_name} são de genêros diferente`, 400)
    }
}

}

export { CreateTimeJogadorUseCase }
