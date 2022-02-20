import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ResidentsService } from '@residents/modules/residents/service/residents.service';

@Controller()
export class ResidentsController {
  private readonly LOG = new Logger(ResidentsController.name);
  constructor(private readonly residentsService: ResidentsService) {}

  @MessagePattern('residents_hello-world')
  getHello(): string {
    this.LOG.debug('CHAMAAA!');
    return this.residentsService.getHello();
  }
}
