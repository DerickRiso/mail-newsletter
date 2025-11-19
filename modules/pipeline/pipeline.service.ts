import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { join } from "path";
import { ContentService } from "@modules/content/content.service";
import type { News, Word } from "@modules/content/content.service"
import { Cron } from "@nestjs/schedule";

@Injectable()
export class DataPipelineService {
    constructor(private readonly content: ContentService) { }

    //@Cron("10 * * * * *")
    async runDataPipeline() {
        try {
            const newsResponse = await this.content.requestNews();
            const wordResponse = await this.content.requestWord();

            const dataNews = await this.content.transformNewsData(newsResponse);
            const dataWord = await this.content.transformWordData(wordResponse);

            this.transformToJson(dataNews.content, "news");
            this.transformToJson(dataWord.content, "word");

            console.log("Trabalho de pipeline concluído");
        } catch (error) {
            console.error("Erro ao executar trabalho do pipeline:", error);
        }
    }

    private async transformToJson(data: News[] | Word, fileName: string) {
        const jsonData = JSON.stringify(data, null, 2);
        const filePath = join(__dirname, "..", "..", "..", `/json/${fileName}.json`)

        await this.writeFile(filePath, jsonData);
    }

    private writeFile(path: string, content: string) {
        fs.writeFile(path, content, (error) => {
            if (error) {
                console.error("Erro ao escrever arquivo JSON: ", error)
            }
        })
    }
}