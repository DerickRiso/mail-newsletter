import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { ContentService } from "./content.service";
import { LoggerMiddleware } from "../../middleware/logger.middleware";

@Module({
    imports: [],
    controllers: [ContentController],
    providers: [ContentService]
})
export class ContentModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('/news', '/books', '/words');
    }
}