import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEstatisticaByTimeUseCase } from "../usecase/ListEstatisticaByTimeUseCase";
import { EstatisticaTimeDTO } from "../dtos/EstatisticaTimeDTO";
import { EditEstatisticaTimeUseCase } from "../usecase/EditEstatisticaTimeUseCase";

class EstatisticaTimeController {
    async listEstatisticaByTime(request: Request, response: Response): Promise<Response> {
        const { timeId } = request.query as unknown as any;
        const listEstatisticaByTimeUseCase = container.resolve(ListEstatisticaByTimeUseCase)
        const estatistica = await listEstatisticaByTimeUseCase.execute(timeId);
        return response.status(201).send(estatistica)
    }

    async edit(request: Request, response: Response): Promise<Response> {
        const editInfo: EstatisticaTimeDTO = request.query as unknown as any;
        const editEstatisticaTimeUseCase = container.resolve(EditEstatisticaTimeUseCase)
        const estatistica = await editEstatisticaTimeUseCase.execute(editInfo);
        return response.status(201).send(estatistica)
    }
}

export { EstatisticaTimeController }
