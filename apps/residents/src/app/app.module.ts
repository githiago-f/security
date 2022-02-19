import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { registryConfig } from 'apps/shared/config/registry';
import { ResidentsController } from './event/residents/residents.controller';
import { ResidentsModule } from '@residents/modules/residents/residents.module';
import { ServiceConfig } from '@shared/types/service-config';
import { registerService } from '@shared/sdk/register-service';
import { serviceConfig } from './config/service';

@Module({
  imports: [
    ResidentsModule,
    ConfigModule.forRoot({
      envFilePath: [ 'apps/dwellings/.env' ],
      load: [registryConfig, serviceConfig],
    }),
  ],
  controllers: [ResidentsController],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private config: ConfigService) {}

  async onApplicationBootstrap() {
    const registryUrl = this.config.get('registry.service');
    const service = this.config.get<ServiceConfig>('residents');
    await registerService(registryUrl, service);
  }
}
