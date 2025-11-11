import { Module } from "@nestjs/common";
import { ContentModule } from "@modules/content/content.module";
import { DataPipelineService } from "./pipeline.service";

@Module({
    imports: [ContentModule],
    controllers: [],
    providers: [DataPipelineService],
    exports: [DataPipelineService]
})
export class PipelineModule {}