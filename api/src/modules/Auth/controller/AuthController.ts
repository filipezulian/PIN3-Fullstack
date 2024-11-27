import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendEmailUseCase } from "../usecase/SendEmailUseCase";

class AuthController { 
    async sendPasswordResetEmail(request: Request, response: Response) {
        const { email } = request.body;
        const sendEmailUseCase = container.resolve(SendEmailUseCase);
        await sendEmailUseCase.execute(email);
        return response.status(201).send({message: 'Email enviado com sucesso'})
    }
}

export { AuthController }
