import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailController } from "./mail.controller";
import { PipelineModule } from "modules/pipeline/pipeline.module";

@Module({
    imports: [PipelineModule],
    controllers: [MailController],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}