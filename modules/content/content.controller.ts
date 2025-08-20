import { Controller, Get, Post } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller()
export class ContentController {
    constructor(private readonly ContentService: ContentService) {}

    @Get('news')
    getNews() {
        return this.ContentService.requestNews();
    }

    @Get('books')
    getBooks() {
        return this.ContentService.requestBooks();
    }

    @Get('words')
    getWords() {
        return this.ContentService.requestWord();
    }
}