import { Services } from '@gateway/app/config/services';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';

@Controller('residents')
export class ResidentsController {
  constructor(
    @Inject(Services.RESIDENTS)
    private readonly residents: ClientProxy
  ) {}

  @Get()
  public helloWorld(@Res() res: Response) {
    this.residents.connect();
    this.residents
      .send('residents_hello-world', {})
      .subscribe(i => res.send(i));
  }
}
