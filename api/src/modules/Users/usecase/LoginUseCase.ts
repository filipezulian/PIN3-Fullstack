import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";
import { AppError } from "@config/AppError";
import { setToken } from "utils/tokenStore";

@injectable()
class LoginUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(email: string, password: string) {
            if (!email || !password) {
                throw new AppError('Email and password are required', 400);
            }

            const user = await this.usuarioRepository.findUserByEmail(email);
            if (!user) {
                throw new AppError('Email ou senha inválido', 401);
            }
            const hashedPassword = await this.usuarioRepository.hashString(password);
            if (await this.usuarioRepository.validatePassword(user, hashedPassword)) {
                const accessToken = await this.usuarioRepository.login(user);
                setToken(user.usr_id, accessToken);
                return { accessToken };
            }
    }
}

export { LoginUseCase }