import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from 'modules/email/mail.module';
import { ContentModule } from 'modules/content/content.module';
import { PipelineModule } from 'modules/pipeline/pipeline.module';

@Module({
  imports: [MailModule, ContentModule, PipelineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
