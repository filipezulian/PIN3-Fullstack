import { IUsuarioRepository } from "@modules/Users/repository/IUsuarioRepository";
import jwt from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import { getEmailTemplate } from "utils/emailTemplate";
import { mailSender } from "../service/MailSender";

@injectable()
class SendEmailUseCase {
    constructor(
        @inject('UsuarioRepository')
        private usuarioRepository: IUsuarioRepository
    ) { }

    async execute(email: string) {
        console.log(email)
        const user = await this.usuarioRepository.findUserByEmail(email);
        const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
        const emailHtml = getEmailTemplate(user.usr_name, resetLink);
        await mailSender.sendEmail(email, 'Password Reset', emailHtml);
    }
}

export { SendEmailUseCase }
