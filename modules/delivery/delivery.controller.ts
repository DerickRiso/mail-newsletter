import { Controller, Get } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";

@Controller('delivery')
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}

    @Get('news')
    getNews() {
        try {
            return this.deliveryService.deliveryNews();
        } catch {
            return { error: "Erro no delivery de notícias" };
        }
    }

    @Get('word')
    getWord() {
        try {
            return this.deliveryService.deliveryWord();
        } catch {
            return { error: "Erro no delivery de palavra" };
        }
    }
}