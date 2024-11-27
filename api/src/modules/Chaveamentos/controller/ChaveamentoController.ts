import { Request, Response } from "express"
import { ListChaveamentoUseCase } from "../usecase/ListChaveamentoUseCase";
import { container } from "tsyringe";
import { CriarChaveamentoDTO } from "../dtos/CriarChaveamentoDTO";
import { GerarChaveamentoUseCase } from "../usecase/GerarChaveamentoUseCase";

class ChaveamentoController {
    async listChaveamento(request: Request, response: Response): Promise<Response>  {
        const listChaveamentoUseCase = container.resolve(ListChaveamentoUseCase);
        const chaveamentos = await listChaveamentoUseCase.execute();
        return response.status(201).send(chaveamentos)
    }

    async gerarChaveamento(request: Request, response: Response): Promise<Response>  {
        const data = request.body as unknown as CriarChaveamentoDTO;
        const gerarChaveamentoUseCase = container.resolve(GerarChaveamentoUseCase);
        const chaveamento = await gerarChaveamentoUseCase.execute(data);
        return response.status(201).send(chaveamento)
    }
}

export { ChaveamentoController }
