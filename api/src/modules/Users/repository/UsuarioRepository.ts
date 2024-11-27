import { getRepository, Repository } from "typeorm";
import { IUsuarioRepository } from "./IUsuarioRepository";
import { Usuario } from "../entities/Usuario";
import { AppError } from "@config/AppError";
import jwt from 'jsonwebtoken';
import { createHash } from "crypto";
import { UsuarioDTO } from "../dtos/UsuarioDTO";

class UsuarioRepository implements IUsuarioRepository {
    private usuarioRepository: Repository<Usuario>;

    constructor() {
        this.usuarioRepository = getRepository(Usuario);
    }

    async delete(user: Usuario) {
        try {
            await this.usuarioRepository.delete(user);

        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel deletar o usuario, tente novamente mais tarde', 401)
        }
    };

    async edit(usuario: Usuario) {
        try {
            await this.usuarioRepository.save(usuario);
            return {
                name: usuario.usr_name,
                email: usuario.usr_email
            }
        } catch (error) {
            console.log(error)
            throw new AppError('Não foi possivel editar agora, tente novamente mais tarde', 500)
        }
    }

    async findById(usuarioId): Promise<Usuario> {
        try {
            const usuario = await this.usuarioRepository.findOne({
                where: {
                    usr_id: usuarioId
                }
            });
            return usuario;
        } catch (error) {
            console.log(error)
            throw new AppError('Ocorreu um erro, tente novamente mais tarde', 500)
        }
    }

    hashString(string: string): string {
        try {
            return createHash('sha256').update(string, 'utf8').digest('hex');
        } catch (error) {
            console.log(error)
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }

    async validatePassword(user: Usuario, password: string): Promise<boolean> {
        if (password !== user.usr_password) {
            throw new AppError('Email ou senha inválido', 401);
        }
        return true
    }

    async login(user: Usuario): Promise<string> {
        try {
            const token = jwt.sign(
                {
                    id: user.usr_id,
                    name: user.usr_name,
                    email: user.usr_email,
                },
                process.env.JWT_SECRET!,
                { expiresIn: '1d' }
            );

            return token;
        } catch (err) {
            console.log(err);
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }

    async create(name: any, email: any, password: any): Promise<UsuarioDTO | any> {
        try {
            const usuario = this.usuarioRepository.create({
                usr_name: name,
                usr_email: email,
                usr_password: password
            });
            await this.usuarioRepository.save(usuario);

            return {
                id: usuario.usr_id,
                nome: usuario.usr_name,
                email: usuario.usr_email,
            };
        } catch (error) {
            console.log(error)
            throw new AppError('Algo deu errado, tente novamente mais tarde!', 500)
        }
    }

    async findUserByEmail(email: string) {
        const user = await this.usuarioRepository.findOne({
            where: {
                usr_email: email
            }
        });
        if (user) {
            return user
        }
        return false
    }

}

export { UsuarioRepository };
