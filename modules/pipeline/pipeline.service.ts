import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { ContentService } from "modules/content/content.service";
import type { News, Word } from "../content/content.service"
import { MailService } from "modules/email/mail.service";

@Injectable()
export class DataPipelineService {
    constructor(
        private readonly content: ContentService,
        private readonly mail: MailService
    ) {}

    async executeJob() {
        // Faz requests para as APIs
        const news = await this.content.requestNews();
        const word = await this.content.requestWord();

        // Transforma os dados
        const dataNews = await this.content.transformNewsData(news);
        const dataWord = await this.content.transformWordData(word);

        // Converte para json
        this.transformToJson(dataNews.response, "news");
        this.transformToJson(dataWord.response, "word");

        console.log("Trabalho feito");
    }

    private transformToJson(data: News[] | Word, fileName: string ) {
        const jsonData = JSON.stringify(data, null, 2);
        const path = `./json/${fileName}.json`;

        this.writeFile(path, jsonData);
    }

    private writeFile(path: string, content: string) {
        fs.writeFile(path, content, (err) => {
            if (err) {
                console.error("Erro ao escrever arquivo", err)
            }
        })
    }

}