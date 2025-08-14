import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail() {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1bb2914e45121b",
        pass: "9be884b9654de3"
      }
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: "teste",
      text: "Olá",
    });

    console.log("Email enviado:", info.messageId);
    return info;
  }
}
