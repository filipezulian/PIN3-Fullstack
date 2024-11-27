import { Request, Response } from "express";
import { CreateTimeDTO } from "../dtos/CreateTimeDTO";
import { container } from "tsyringe";
import { CreateTimeUseCase } from "../usecase/CreateTimesUseCase";
import { DeleteTimeUseCase } from "../usecase/DeleteTimeUseCase";
import { EditTimeUseCase } from "../usecase/EditTimeUseCase";
import { EditTimeDTO } from "../dtos/EditTimeDTO";
import { ListTimeByUsuarioUseCase } from "../usecase/ListTimeByUsuarioUseCase";
import { GerarTimeDTO } from "../dtos/GerarTimeDTO";
import { GerarTimesUseCase } from "../usecase/GerarTimesUseCase";
import { ListJogadorByTimeUseCase } from "../usecase/ListJogadorByTimeUseCase";
import { CreateMultipleTimeUseCase } from "../usecase/CreateMultipleTimeUseCase";

class TimeController {
    async create(request: Request, response: Response): Promise<Response> {
        const infoCreate: CreateTimeDTO = request.body as unknown as CreateTimeDTO;
        const userId = request.user.id;
        const createTimeUseCase = container.resolve(CreateTimeUseCase)
        const time = await createTimeUseCase.execute({tim_name: infoCreate.tim_name, tim_gender: infoCreate.tim_gender, tim_owner: userId, times: infoCreate.times});
        return response.status(201).send(time);
    }

    async edit(request: Request, response: Response): Promise<Response> {
        const editInfo: EditTimeDTO = request.query as unknown as EditTimeDTO;
        const editTimeUseCase = container.resolve(EditTimeUseCase)
        const time = await editTimeUseCase.execute(editInfo);
        return response.status(201).send(time);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { timeId } = request.query as unknown as any;
        const deleteTimeUseCase = container.resolve(DeleteTimeUseCase)
        const message = await deleteTimeUseCase.execute(timeId);
        return response.status(201).send(message);
    }

    async listTimesByUsuario(request: Request, response: Response): Promise<Response> {
        const usuarioId = request.user.id;
        const listTimeByUsuarioUseCase = container.resolve(ListTimeByUsuarioUseCase)
        const time = await listTimeByUsuarioUseCase.execute(usuarioId);
        return response.status(201).send(time);
    }

    async gerarTimes(request: Request, response: Response): Promise<Response> {
        const {esporteId, tim_gender, jogadores, playersPerTeam}: GerarTimeDTO = request.body as unknown as GerarTimeDTO;
        const usuarioId = request.user.id;
        const gerarTimesUsecase = container.resolve(GerarTimesUseCase)
        const times = await gerarTimesUsecase.execute({esporteId, tim_gender, jogadores, usuarioId, playersPerTeam});
        return response.status(201).send(times);
    }

    async listJogadorPorTime(request: Request, response: Response): Promise<Response>  {
        const {time_id} = request.query as unknown as any;
        const listJogadorByTimeUseCase = container.resolve(ListJogadorByTimeUseCase);
        const jogadores = await listJogadorByTimeUseCase.execute(time_id);
        return response.status(201).send(jogadores)
    }

    async createMultiple(request: Request, response: Response): Promise<Response>  {
        const times = request.body as unknown as any;
        const userId = request.user.id;
        const createMultipleTimeUseCase = container.resolve(CreateMultipleTimeUseCase);
        const jogadores = await createMultipleTimeUseCase.execute(userId, times);
        return response.status(201).send(jogadores)
    }
}

export { TimeController }
