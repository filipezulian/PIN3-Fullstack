import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateJogadorUseCase } from "../usecase/CreateJogadorUseCase";
import { ListJogadorByOwnerUseCase } from "../usecase/ListJogadorByOwnerUseCase";
import { EditJogadorUseCase } from "../usecase/EditJogadorUseCase";
import { DeleteJogadorUseCase } from "../usecase/DeleteJogadorUseCase";

class JogadorController {

    async create(request: Request, response: Response): Promise<Response> {
        const { jog_name: name, jog_gender: gender } = request.body as unknown as any;
        const ownerId = request.user.id;
        const createJogadorUseCase = container.resolve(CreateJogadorUseCase);
        const jogador = await createJogadorUseCase.execute(name, gender, ownerId);
        return response.status(201).send(jogador)
    }

    async listJogadorByOwner(request: Request, response: Response): Promise<Response> {
        const ownerId = request.user.id;
        const listJogadorByOwnerUseCase = container.resolve(ListJogadorByOwnerUseCase)
        const jogadores = await listJogadorByOwnerUseCase.execute(ownerId);
        return response.status(201).send(jogadores)
    }

    async edit(request: Request, response: Response): Promise<Response> {
        const { jog_id: id, jog_name: name, jog_gender: gender } = request.query as unknown as any;
        const ownerId = request.user.id;
        const editJogadorUseCase = container.resolve(EditJogadorUseCase);
        const jogador = await editJogadorUseCase.execute(id, name, gender, ownerId);
        return response.status(201).send(jogador)
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { jog_id: id } = request.query as unknown as any;
        const ownerId = request.user.id;
        const deleteJogadorUseCase = container.resolve(DeleteJogadorUseCase);
        await deleteJogadorUseCase.execute(id, ownerId);
        return response.status(201).send({ 'message': 'jogador deletado com sucesso' })
    }
}

export { JogadorController }
