import { Injectable } from '@nestjs/common';
import { DataPipelineService } from '@modules/pipeline/pipeline.service';


@Injectable()
export class AppService {
  constructor (
    private readonly testPipe: DataPipelineService
  ) {}
  getHello(): string {
    this.testPipe.executeJob();
    return 'Hello World!';
  }
}
