import { Injectable } from "@nestjs/common";
import { LoggerMiddleware } from "middleware/logger.middleware";
import { ContentService } from "modules/content/content.service";
import { MailService } from "modules/email/mail.service";

@Injectable()
export class PipelineService {
    constructor(
        private readonly content: ContentService,
        private readonly mail: MailService  
    ) {}

    async executeJob() {
        const data = await this.content.requestNews();
        console.log("Trabalho executado!")
        
    }

}