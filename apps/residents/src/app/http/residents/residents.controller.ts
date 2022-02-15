import { Controller, Get } from '@nestjs/common';
import { ResidentsService } from '@residents/modules/residents/service/residents.service';

@Controller('residents')
export class ResidentsController {
  constructor(private readonly residentsService: ResidentsService) {}

  @Get()
  getHello(): string {
    return this.residentsService.getHello();
  }
}
