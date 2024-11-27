import { AppError } from '@config/AppError';
import Auth from '@config/Auth';
import { IUsuarioRepository } from '@modules/Users/repository/IUsuarioRepository';
import { verify } from 'jsonwebtoken';

interface JwtPayload {
  context?: string;
}

class ValidToken {
  private usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async validate(token: any) {
    const context = this.getContextFromToken(token);
    return this.fetchUser(context);
  }

  private getContextFromToken(token: any): JwtPayload {
    try {
      const informations = verify(token, Auth.secret_token) as JwtPayload;
      return JSON.parse(informations.context);
    } catch (error) {
      throw new AppError('Token inválido!', 401);
    }
  }

  async fetchUser(context: any) {
    const user = await this.usuarioRepository.findUserByEmail(context.mail);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  }
}
export { ValidToken };
