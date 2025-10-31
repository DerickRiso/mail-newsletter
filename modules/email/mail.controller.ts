import { Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

const date = new Date()
const hours = date.getHours();
const minutes = date.getMinutes();

@Controller()
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Post('send-email')
    send() {
        this.mailService.sendEmail();
        return console.log(`Email enviado: ${hours}:${minutes}`);
    }
}