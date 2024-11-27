import { Request, Response } from "express";
import { CreateCampeonatoDTO } from "../dtos/CreateCampeonatoDTO";
import { container } from "tsyringe";
import { CreateCampeonatoUseCase } from "../usecase/CreateCampeonatoUseCase";
import { EditCampeonatoUseCase } from "../usecase/EditCampeonatoUseCase";
import { ViewCampeonatoUseCase } from "../usecase/ViewCampeonatoUseCase";
import { DeleteCampeonatoUseCase } from "../usecase/DeleteCampeonatoUseCase";

class CampeonatoController {
    async create(request: Request, response: Response) {
        const dataCamp: CreateCampeonatoDTO = request.body as unknown as CreateCampeonatoDTO
        const camp_owner = request.user.id
        const createCampeonatoUseCase = container.resolve(CreateCampeonatoUseCase)
        const campeonato = await createCampeonatoUseCase.execute(dataCamp, camp_owner)
        return response.status(201).send(campeonato)
    }

    async edit(request: Request, response: Response) {
        const { camp_id, camp_nome, camp_obs } = request.body;
        const editCampeonatoUseCase = container.resolve(EditCampeonatoUseCase);
        const campeonato = await editCampeonatoUseCase.execute(camp_id, camp_nome, camp_obs);
        return response.status(201).send(campeonato);
    }

    async finalizar(request: Request, response: Response) {
    }

    async view(request: Request, response: Response) {
        const {camp_id} = request.query as unknown as any;
        const viewCampeonatoUseCase = container.resolve(ViewCampeonatoUseCase);
        const campeonato = await viewCampeonatoUseCase.execute(camp_id);
        return response.status(201).send(campeonato);
    }
    
    async delete(request: Request, response: Response) {
        const {camp_id} = request.query as unknown as any;
        const deleteCampeonatoUseCase = container.resolve(DeleteCampeonatoUseCase);
        const message = await deleteCampeonatoUseCase.execute(camp_id);
        return response.status(201).send(message);
    }
}

export { CampeonatoController }
