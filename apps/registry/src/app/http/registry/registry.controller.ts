import { Body, Controller, Get, Ip, Logger, Param, Post } from '@nestjs/common';
import { RegistryService } from '@registry/modules/registry/service/registry.service';
import { ServiceDto } from './dto/service-dto';

@Controller('registry')
export class RegistryController {
  private readonly LOG = new Logger(RegistryController.name);
  constructor(private readonly registryService: RegistryService) {}

  @Post()
  registerService(@Ip() ip: string, @Body() service: ServiceDto) {
    this.LOG.debug(`IP::${ip}::${service.name}`);
    return this.registryService.register(
      ip,
      service.name,
      service.port
    );
  }

  @Get(':service')
  getService(@Param('service') service: string) {
    return this.registryService.get(service);
  }
}
