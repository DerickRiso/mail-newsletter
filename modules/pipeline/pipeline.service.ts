import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import {join} from "path";
import { ContentService } from "@modules/content/content.service";
import type { News, Word } from "@modules/content/content.service"
import { Cron } from "@nestjs/schedule";

@Injectable()
export class DataPipelineService {
    constructor(
        private readonly content: ContentService
    ) {}

    //@Cron("10 * * * * *")
    async runDataPipeline() {
        try {
            const news = await this.content.requestNews();
            const word = await this.content.requestWord();

            const dataNews = await this.content.transformNewsData(news);
            const dataWord = await this.content.transformWordData(word);

            this.transformToJson(dataNews.response, "news");
            this.transformToJson(dataWord.response, "word");
        } catch (err) {
            console.error("Erro ao executar trabalho do pipeline", err);
            return
        }
        console.log("Trabalho feito");
    }

    private async transformToJson(data: News[] | Word, fileName: string) {
        const jsonData = JSON.stringify(data, null, 2);
        const filePath = join(__dirname, "..", "..", "..", `/json/${fileName}.json` )

        await this.writeFile(filePath, jsonData);
    }

    private writeFile(path: string, content: string) {
        fs.writeFile(path, content, (err) => {
            if (err) {
                console.error("Erro ao escrever arquivo", err)
            }
        })
    }

    
}