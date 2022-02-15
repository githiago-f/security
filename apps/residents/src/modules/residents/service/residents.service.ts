import { Injectable } from '@nestjs/common';

@Injectable()
export class ResidentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
