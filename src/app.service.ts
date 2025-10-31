import { Injectable } from '@nestjs/common';
import { PipelineService } from 'modules/pipeline/pipeline.service';


@Injectable()
export class AppService {
  constructor (private readonly testPipe: PipelineService) {}
  getHello(): string {
    this.testPipe.executeJob();
    return 'Hello World!';
  }
}
