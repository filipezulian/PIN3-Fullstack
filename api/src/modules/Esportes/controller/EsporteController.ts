import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEsportesUseCase } from "../usecase/ListEsportesUseCase";

class EsporteController {

    async listEsportes(request: Request, response: Response): Promise<Response> {
        const listEsportesUseCase = container.resolve(ListEsportesUseCase);
        const esportes = await listEsportesUseCase.execute();
        return response.status(201).send(esportes)
    }

}

export { EsporteController }
