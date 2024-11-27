import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";
import { AppError } from "@config/AppError";

@injectable()
class CreateUsuarioUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(name:string, email: string, password: string){
        const hashedPassword = this.usuarioRepository.hashString(password);
        if (await this.usuarioRepository.findUserByEmail(email)){
            throw new AppError('There is already an user with that email', 401)
        }
        
        return await this.usuarioRepository.create(name, email, hashedPassword);
    }
}

export { CreateUsuarioUseCase }
