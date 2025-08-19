import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class NewsService {
    async requestNews() {
        const urlNews = "https://api.currentsapi.services/v1/latest-news?"
        +"language=us&"+"apiKey="+ process.env.CURRENT_API_KEY;

        const urlMovie = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="+process.env.NYT_API_KEY;

        console.log(urlMovie)
        
        try {
            const response = await axios.get(urlMovie);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
}