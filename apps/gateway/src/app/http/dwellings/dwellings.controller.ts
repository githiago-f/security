import { Services } from '@gateway/app/config/services';
import { Controller, Get, Inject, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';

@Controller('dwellings')
export class DwellingsController {
  constructor(
    @Inject(Services.DWELLINGS)
    private readonly dwellings: ClientProxy
  ) {}

  @Get()
  public helloWorld(@Res() res: Response) {
    this.dwellings.connect();
    this.dwellings
      .send('dwelling-hello_world', {})
      .subscribe(i => res.send(i));
  }
}
