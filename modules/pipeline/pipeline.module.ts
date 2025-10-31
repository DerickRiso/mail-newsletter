import { Module } from "@nestjs/common";
import { ContentModule } from "modules/content/content.module";
import { MailModule } from "modules/email/mail.module";
import { PipelineService } from "./pipeline.service";

@Module({
    imports: [ContentModule, MailModule],
    controllers: [],
    providers: [PipelineService],
    exports: [PipelineService]
})
export class PipelineModule {}