import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ContentService {
    async requestNews() {
        const url = "https://api.currentsapi.services/v1/latest-news?" +"language=us&"+"apiKey="+ process.env.CURRENT_API_KEY;
        
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async requestBooks() {
        const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + process.env.NYT_API_KEY;
        
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}