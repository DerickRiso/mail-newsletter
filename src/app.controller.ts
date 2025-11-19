import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { DataPipelineService } from '@/modules/pipeline/pipeline.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataPipelineService: DataPipelineService
  ) { }

  @Get()
  getHello() {
    return this.appService.getHello()
  }

  @Get('pipeline')
  runDataPipeline() {
    this.dataPipelineService.runDataPipeline();
  }
}
