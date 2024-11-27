import { inject, injectable } from "tsyringe";
import { IUsuarioRepository } from "../repository/IUsuarioRepository";

@injectable()
class EditUsuarioUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(userId, name, email) {
        const usuario = await this.usuarioRepository.findById(userId);
        const editedUsuario = {
            ...usuario,
            usr_name: name ?? usuario.usr_name,
            usr_email: email ?? usuario.usr_email
        }
        return await this.usuarioRepository.edit(editedUsuario);
    }

}

export { EditUsuarioUseCase }
