import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { DwellingsController } from './event/dwellings/dwellings.controller';
import { DwellingsModule } from '@dwellings/modules/dwellings/dwellings.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { registryConfig } from 'apps/shared/config/registry';
import { ServiceConfig } from '@shared/types/service-config';
import { serviceConfig } from './config/service';
import { registerService } from '@shared/sdk/register-service';

@Module({
  imports: [
    DwellingsModule,
    ConfigModule.forRoot({
      envFilePath: [ 'apps/dwellings/.env' ],
      load: [registryConfig, serviceConfig],
    }),
  ],
  controllers: [DwellingsController],
})
export class AppModule implements OnApplicationBootstrap {
  private readonly LOG = new Logger(AppModule.name);
  constructor(private readonly config: ConfigService) {}

  async onApplicationBootstrap() {
    const registryHost = this.config.get('registry.service');
    const service = this.config.get<ServiceConfig>('dwellings');
    const { data } = await registerService(registryHost, service);
    this.LOG.debug('Registered ::: ' + data);
  }
}
