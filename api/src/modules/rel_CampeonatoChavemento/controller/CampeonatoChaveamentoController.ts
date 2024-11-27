import { Request, Response } from "express"

class CampeonatoChaveamentoController {
    async create(request: Request, response: Response): Promise<Response> {
        return response.status(201).send()
    }
}

export { CampeonatoChaveamentoController }