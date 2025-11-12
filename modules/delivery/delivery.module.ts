import { MiddlewareConsumer, Module } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { ContentModule } from "../content/content.module";
import { DeliveryController } from "./delivery.controller";
import { LoggerMiddleware } from "@/middleware/logger.middleware";

@Module({
    imports: [ContentModule],
    controllers: [DeliveryController],
    providers: [DeliveryService],
    exports: [DeliveryService]
})
export class DeliveryModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('delivery')
    }
}

