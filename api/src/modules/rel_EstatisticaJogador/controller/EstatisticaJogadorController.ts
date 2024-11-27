import { container } from "tsyringe";
import { CreateEstatisticaJogadorUseCase } from "../usecase/CreateEstatisticaJogadorUseCase";
import { Request, Response } from "express";
import { ListEstatisticaByJogador } from "../usecase/ListEstatisticaByJogador";
import { EditEstatisticaJogadorUseCase } from "../usecase/EditEstatisticaJogadorUseCase";
import { EstatisticaJogadorEditDTO } from "../dtos/EstatisticaJogadorEditDTO";

class EstatisticaJogadorController {
    async create(request: Request, response: Response): Promise<Response> {
        const { jogador } = request.body as unknown as any;
        const createEstatisticaJogadorUseCase = container.resolve(CreateEstatisticaJogadorUseCase);
        const estatistica = await createEstatisticaJogadorUseCase.execute(jogador);
        return response.status(201).send(estatistica)
    }

    async listEstatisticaByJogador(request: Request, response: Response): Promise<Response> {
        const { jogadorId } = request.query as unknown as any;
        const listEstatisticaByJogador = container.resolve(ListEstatisticaByJogador);
        const estatistica = await listEstatisticaByJogador.execute(jogadorId);
        return response.status(201).send(estatistica);
    }

    async edit(request: Request, response: Response): Promise<Response> {
        const editInfo: EstatisticaJogadorEditDTO = request.query as unknown as EstatisticaJogadorEditDTO;
        const editEstatisticaJogadorUseCase = container.resolve(EditEstatisticaJogadorUseCase);
        const estatistica = await editEstatisticaJogadorUseCase.execute(editInfo);
        return response.status(201).send(estatistica);
    }

}

export { EstatisticaJogadorController }
