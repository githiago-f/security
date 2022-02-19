import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ResidentsService } from '@residents/modules/residents/service/residents.service';

@Controller()
export class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  @MessagePattern('residents_hello-world')
  getHello(): string {
    return this.residentsService.getHello();
  }
}
