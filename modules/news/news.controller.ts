import { Controller, Get, Post } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller()
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get('news')
    getNews() {
        return this.newsService.requestNews();
    }
}