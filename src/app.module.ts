import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from 'modules/email/mail.module';
import { NewsModule } from 'modules/news/news.module';

@Module({
  imports: [MailModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
