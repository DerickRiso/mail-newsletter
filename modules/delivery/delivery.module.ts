import { Module } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { ContentModule } from "../content/content.module";
import { DeliveryController } from "./delivery.controller";

@Module({
    imports: [ContentModule],
    controllers: [DeliveryController],
    providers: [DeliveryService],
    exports: [DeliveryService]
})
export class DeliveryModule {
    
}

