import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTimeJogadorUseCase } from "../usecase/CreateTimeJogadorUseCase";
import { CreateMultipleTimeJogadoresUseCase } from "../usecase/CreateMultipleTimeJogadoresUseCase";
import { ListTimeJogadorByTimeUseCase } from "../usecase/ListTimeJogadorByTimeUseCase";

class TimeJogadorController {
    async create(request: Request, response: Response) {
        const {jog_id, tim_id} = request.body
        const createTimeJogadorUseCase = container.resolve(CreateTimeJogadorUseCase);
        const timejogador = await createTimeJogadorUseCase.execute(jog_id, tim_id);
        return response.status(201).send(timejogador);
    }

    async createMultiple(request: Request, response: Response) {
        const {jogadores, tim_id} = request.body
        const createMultipleTimeJogadoresUseCase = container.resolve(CreateMultipleTimeJogadoresUseCase);
        const timejogadores = await createMultipleTimeJogadoresUseCase.execute(jogadores, tim_id);
        return response.status(201).send(timejogadores);
    }

    async listByTime(request: Request, response: Response) {
        const tim_id = request.query as unknown as number
        const listTimeJogadorByTimeUseCase = container.resolve(ListTimeJogadorByTimeUseCase)
        const timejogadores = await listTimeJogadorByTimeUseCase.execute(tim_id);
        return response.status(201).send(timejogadores);
    }

}

export { TimeJogadorController }
