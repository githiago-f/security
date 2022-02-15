import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DwellingsService } from '../../../modules/dwellings/service/dwellings.service';

@Controller()
export class DwellingsController {
  private readonly LOG = new Logger(DwellingsController.name);
  constructor(private readonly dwellingsService: DwellingsService) {}

  @MessagePattern('dwelling-hello_world')
  getHello(): string {
    this.LOG.debug('dwelling hello_world');
    return this.dwellingsService.getHello();
  }
}
