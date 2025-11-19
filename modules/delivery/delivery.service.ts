import { Injectable } from "@nestjs/common";
import news from "@/json/news.json";
import word from "@/json/word.json";

@Injectable()
export class DeliveryService {

    deliveryNews() {
        try {
            return {
                sucess: true,
                data: news
            };
        } catch (error) {
            console.error("Erro ao entregar notícias:", error);
        }
    }

    deliveryWord() {
        try {
            return {
                sucess: true,
                data: word
            };
        } catch (error) {
            console.error("Erro ao entregar palavra:", error);
        }
    }
}