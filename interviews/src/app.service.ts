import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  runInterviewLogic(): string {
    return 'Hello World!';
  }
}
