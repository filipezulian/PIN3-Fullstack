import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";

@injectable()
class GetUserByEmailUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(email: string){
        return await this.usuarioRepository.findUserByEmail(email);
    }
}

export {GetUserByEmailUseCase}