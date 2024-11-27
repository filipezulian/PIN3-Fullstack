import { AppError } from "@config/AppError";
import nodemailer from 'nodemailer';

class MailSender {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) ?? 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMTP_USER ?? 'deadlycomix@gmail.com',
                pass: process.env.SMTP_PASS,
            },
            logger: true
        });
    }

    async sendEmail(to: string, subject: string, html: string): Promise<void> {
        try {
            await this.transporter.sendMail({
                from: `"Bracketier" <${process.env.SMTP_USER}>`,
                to: to, 
                subject: subject, 
                html: html, 
            });
            console.log(`Email sent to ${to}`);
        } catch (error) {
            console.error(`Failed to send email: ${error}`);
            throw new AppError('Failed to send email.', 500);
        }
    }
}

export const mailSender = new MailSender();