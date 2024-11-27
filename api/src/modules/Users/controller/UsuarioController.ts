import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUseCase } from "../usecase/LoginUseCase";
import { CreateUsuarioDTO } from "../dtos/CreateUsuarioDTO";
import { CreateUsuarioUseCase } from "../usecase/CreateUsuarioUseCase";
import { EditUsuarioUseCase } from "../usecase/EditUsuarioUseCase";
import { DeleteUsuarioUseCase } from "../usecase/DeleteUsuarioUseCase";
import { GetUserByEmailUseCase } from "../usecase/GetUserByEmailUseCase";

class UsuarioController {
    async login(request: Request, response: Response): Promise<Response> {
        const { usr_email: email, usr_password: password } = request.body;
        const loginUseCase = container.resolve(LoginUseCase);
        const { accessToken } = await loginUseCase.execute(email, password);
        response.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000,
        });
    
        return response.status(200).send({'token': accessToken});
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { usr_name: name, usr_email: email, usr_password: password }: CreateUsuarioDTO = request.body as unknown as CreateUsuarioDTO;
        const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase);
        const usuario = await createUsuarioUseCase.execute(name, email, password);
        return response.status(200).send(usuario)
    }

    async logout(request: Request, response: Response): Promise<Response> {
        response.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
    
        return response.status(200).json({ message: 'Logged out successfully' });
    }

    async edit(request: Request, response: Response): Promise<Response> {
        const { usr_name: name, usr_email: email }: CreateUsuarioDTO = request.query as unknown as CreateUsuarioDTO;
        const userId = request.user.id;
        const editUsuarioUseCase = container.resolve(EditUsuarioUseCase)
        const usuario = await editUsuarioUseCase.execute(userId, name, email)
        return response.status(201).send(usuario);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { usr_password } = request.query as unknown as any
        const userId = request.user.id
        const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);
        await deleteUsuarioUseCase.execute(userId, usr_password);
        response.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        return response.status(201).send()
    }

    async getUserByEmail(request: Request, response: Response): Promise<Response> {
        const {email} = request.body as unknown as any;
        const getUserByEmailUseCase = container.resolve(GetUserByEmailUseCase);
        const userData = await getUserByEmailUseCase.execute(email);
        const user = { usr_id: userData.usr_id, usr_email: userData.usr_email, user_name: userData.usr_name};
        return response.status(201).send(user);
    }
}

export { UsuarioController }
