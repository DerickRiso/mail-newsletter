import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import data from "../json/news.json";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('root')
  @Render('index')
  getHello() {
    return {data};
  }

}
