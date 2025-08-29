import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ContentService } from './content.service';
import { 
    TransformBooksInterceptor,
    TransformNewsInterceptor,
    TransformWordsInterceptor
} from 'interceptors/transform.interceptor';



@Controller()
export class ContentController {
    constructor(private readonly ContentService: ContentService) {}

    @Get('news')
    @UseInterceptors(TransformNewsInterceptor)
    getNews() {
        return this.ContentService.requestNews();
    }

    @Get('books')
    @UseInterceptors(TransformBooksInterceptor)
    getBooks() {
        return this.ContentService.requestBooks();
    }

    @Get('words')
    @UseInterceptors(TransformWordsInterceptor)
    getWords() {
        return this.ContentService.requestWord();
    }
}