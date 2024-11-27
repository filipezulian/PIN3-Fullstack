import { inject, injectable } from "tsyringe";
import { ITimeRepository } from "../repository/ITimeRepository";
import { GerarTimeDTO } from "../dtos/GerarTimeDTO";
import { IEsporteRepository } from "@modules/Esportes/repository/IEsporteRepository";
import { AppError } from "@config/AppError";
import { Esporte } from "@modules/Esportes/entities/Esporte";
import { Gender } from "utils/Gender";
import { IJogadorRepository } from "@modules/Jogadores/repository/IJogadorRepository";

@injectable()
class GerarTimesUseCase {
    constructor(
        @inject('TimeRepository')
        private timeRepository: ITimeRepository,
        @inject('EsporteRepository')
        private esporteRepository: IEsporteRepository,
        @inject('JogadorRepository')
        private jogadorRepository: IJogadorRepository,
    ) { }

    async execute({ esporteId, tim_gender, jogadores, usuarioId, playersPerTeam }: GerarTimeDTO) {
        const esporte = await this.esporteRepository.getEsporteById(esporteId);
        const gender = tim_gender.toLowerCase();
        
        /*Validação de quantidade de jogadores por time:
        1 - Valida se a quantidade de jogador por times segue a regra do esporte selecionado
        2 - Valida se tem jogador suficiente para gerar times
        */
       this.validateAmountPlayersPerTeam(playersPerTeam, jogadores, esporte);
       
       /*Validação de quantidade de times:
           1 - Valida se não terá jogador sobrando ao gerar times. 
               Se não terá, retorna a quantidade de times possiveis.
       */
        const amountTimes = this.validateAmountOfPlayers(jogadores, playersPerTeam);

       /*Validação de jogadores:
           1 - Valida se o gênero do jogador é igual ao do time
           2 - Em caso de times mistos, é validado as quantidades de jogadores masculinos e femininos
       */
       await this.validateJogadoresGender(jogadores, gender, usuarioId, amountTimes);


        if (gender !== Gender.MISTO) {
            return await this.timeRepository.generateTimes(jogadores, amountTimes, playersPerTeam);
        }
        return await this.timeRepository.generateTimesMisto(jogadores, amountTimes, playersPerTeam);
    }

    validateAmountOfPlayers(jogadores: number[], playersPerTeam: number) {
        const maxTimes = this.calculateMaxTeams(jogadores, playersPerTeam);
        if (!Number.isInteger(maxTimes)) {
            const remainder = jogadores.length % playersPerTeam;
            const playersNeeded = remainder === 0 ? 0 : playersPerTeam - remainder;
            throw new AppError(`Faltam ${playersNeeded} jogador(es) para pode gerar ${Math.ceil(maxTimes)} times com ${playersPerTeam} jogador(es) em cada time`, 400)
        }
        return maxTimes
    }

    calculateMaxTeams(jogadores: number[], playersPerTeam: number) {
        return jogadores.length / playersPerTeam
    }

    async validateJogadoresGender(jogadores: number[], gender: string, usuarioId: number, amountTimes: number) {
        const jogadoresData = await Promise.all(
            jogadores.map(jogadorId => this.jogadorRepository.jogadorById(jogadorId, usuarioId))
        );
        let masculino = 0;
        let feminino = 0;
        jogadoresData.forEach(jogador => {
            if (gender !== Gender.MISTO) {
                if (jogador.jog_gender !== gender) {
                    throw new AppError(`Jogador(a) ${jogador.jog_name} não é do gênero ${gender}`, 400);
                }
            } else {
                jogador.jog_gender === Gender.MASCULINO ? masculino++ : feminino++;
            }
        });
        if (gender === Gender.MISTO) {
            if (!Number.isInteger(masculino/amountTimes) || !Number.isInteger(feminino/amountTimes)) {
                throw new AppError('Só é gerado times misto onde todos os times terão a mesma quantidade de jogadores femininos e masculinos', 400);
            }
            if (masculino !== feminino){ 
                throw new AppError('Por favor selecione a mesma quantidade de jogadores femininos e masculinos', 400);
            }
        }
    }

    validateAmountPlayersPerTeam(playersPerTeam: number, jogadores: number[], esporte: Esporte) {
        if (playersPerTeam < esporte.qntjogadorportime) {
            throw new AppError(`Não é possivel gerar times de ${esporte.esp_name} com menos de ${esporte.qntjogadorportime} jogadores!`, 400)
        }
        if (jogadores.length < esporte.qntjogadorportime) {
            throw new AppError('Não tem jogadores suficiente para gerar times')
        }
    }
}

export { GerarTimesUseCase }
