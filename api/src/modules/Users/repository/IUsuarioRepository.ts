import { UsuarioDTO } from "../dtos/UsuarioDTO";
import { Usuario } from "../entities/Usuario";


interface IUsuarioRepository {
    login(user: Usuario);
    findUserByEmail(email: string);
    create(name, email, password): Promise<UsuarioDTO | any>;
    hashString(string: string): string;
    validatePassword(user: Usuario, password: string): Promise<boolean>;
    findById(usuarioId: number): Promise<Usuario>;
    edit(usuario: Usuario): any;
    delete(user: Usuario);
}

export { IUsuarioRepository }
