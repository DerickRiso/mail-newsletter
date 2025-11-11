import { Injectable } from "@nestjs/common";
import news from "@/json/news.json";
import word from "@/json/word.json";

@Injectable()
export class DeliveryService {

    deliveryNews() {
        return news;
    }

    deliveryWord() {
        return word;
    }


}