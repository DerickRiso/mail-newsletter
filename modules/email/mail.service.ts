import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import * as pug from "pug";
import * as path from "path";

@Injectable()
export class MailService {
    async sendEmail() {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const templatePath = path.join(process.cwd(), "src", "templates", "default.pug");

    const html = pug.renderFile(templatePath, {
      name: process.env.MAIL_FROM,
      product: "Meu app"
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: "teste",
      html,
    });

    console.log("Email enviado:", info.messageId);
    return info;
  }
}
