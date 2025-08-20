import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from 'modules/email/mail.module';
import { ContentModule } from 'modules/content/content.module';

@Module({
  imports: [MailModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
