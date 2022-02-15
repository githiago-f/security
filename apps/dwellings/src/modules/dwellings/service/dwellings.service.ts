import { Injectable } from '@nestjs/common';

@Injectable()
export class DwellingsService {
  public getHello(): string {
    return 'Hello World!';
  }
}
