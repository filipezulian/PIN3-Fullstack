import { inject, injectable } from "tsyringe";
import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";
import { IChaveamentoRepository } from "../repository/IChaveamentoRepository";
import { AppError } from "@config/AppError";

@injectable()
class GerarChaveamentoUseCase {
    constructor(
        @inject("ChaveamentoRepository")
        private chaveamentoRepository: IChaveamentoRepository
    ) { }
    async execute(data: CriarChaveamentoDTO) {
        await this.validateConditions(data);
        return await this.chaveamentoRepository.gerarChaveamento(data);
    }

    async validateConditions(data: CriarChaveamentoDTO) {
        const chaveamento = await this.chaveamentoRepository.getChaveamentoById(data.chav_id);
        const qntTimes = data.qntTimes;
        if (data.qntTimes > chaveamento.maxlimit || qntTimes < chaveamento.minlimit) {
            throw new AppError('A quantidade de times ultrapassa o permitido pelo chaveamento', 401)
        }
        if (data.times.length !== qntTimes) {
            throw new AppError("A quantidade de times não corresponde aos times fornecidos", 400);
        }
    }

}

export { GerarChaveamentoUseCase }
