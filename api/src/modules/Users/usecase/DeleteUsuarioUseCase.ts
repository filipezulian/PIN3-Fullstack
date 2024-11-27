import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";

@injectable()
class DeleteUsuarioUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(userId: number, password: string) {
        const hashedPassord = this.usuarioRepository.hashString(password);
        const usuario = await this.usuarioRepository.findById(userId);
        const validPassword = this.usuarioRepository.validatePassword(usuario, hashedPassord)

        if (validPassword) {
            this.usuarioRepository.delete(usuario);
        }
    }
}

export { DeleteUsuarioUseCase }
