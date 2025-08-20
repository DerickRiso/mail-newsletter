import { Injectable } from "@nestjs/common";
import axios from "axios";

async function makeRequest(url: string) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

@Injectable()
export class ContentService {
    async requestNews() {
        const url = "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key="+ process.env.NYT_API_KEY;
        return makeRequest(url);
    }

    async requestBooks() {
        const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + process.env.NYT_API_KEY;
        return makeRequest(url);
    }

    async requestWord() {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/factory";
        return makeRequest(url); 
    }
}