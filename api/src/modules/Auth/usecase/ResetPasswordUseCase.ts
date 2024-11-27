import { IUsuarioRepository } from "@modules/Users/repository/IUsuarioRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ResetPasswordUseCase {
constructor(
    @inject('UsuarioRepository')
    private usuarioRepository: IUsuarioRepository
){}

async execute(token: string, email: string){

}
}

export { ResetPasswordUseCase }
