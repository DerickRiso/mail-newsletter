import { Injectable } from "@nestjs/common";
import axios from "axios";

export type Word = {
    word: string;
    definition: string;
}

export type News = {
    title: string,
    abstract: string,
    text: string,
    url: string
}

export type NytApiResponse = {
    status: string;
    copyright: string;
    num_results: number;
    results: Article[];
};

export type Article = {
    slug_name: string;
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    uri: string;
    url: string;
    byline: string;
    item_type: string;
    source: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    first_published_date: string;
    material_type_facet: string;
    kicker: string;
    subheadline: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    related_urls: string[];
    multimedia: Multimedia[];
};

export type Multimedia = {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
};

@Injectable()
export class ContentService {
    private async makeRequest(url: string) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Erro ao fazer chamada para APIs externas:", error);
        }
    }

    private removeVoidData(arr: News[]): News[] {
        return arr.filter(item => item.title !== "");
    }

    async requestNews() {
        const url = "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=" + process.env.NYT_API_KEY;
        return this.makeRequest(url);
    }

    async requestWord() {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/happy";
        return this.makeRequest(url);
    }

    async transformNewsData(data: NytApiResponse) {
        const requestResults = Array.isArray(data?.results) ? data.results : [];

        const tempResponse: News[] = requestResults.map((item, index) => ({
            key: index,
            title: item.title || "",
            abstract: item.abstract || "",
            text: item.multimedia?.[0]?.caption || "",
            url: item.url || ""
        }));

        const response = this.removeVoidData(tempResponse);

        return {
            sucess: true,
            content: response
        }
    }

    async transformWordData(data: Word) {
        let response: Word = {
            word: "",
            definition: ""
        };

        response.word = data[0].word || "";
        response.definition = data[0].meanings[0].definitions[0].definition || "";

        return {
            sucess: true,
            content: response
        }
    }
}