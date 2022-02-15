import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { DwellingsController } from './event/dwellings/dwellings.controller';
import { DwellingsModule } from '@dwellings/modules/dwellings/dwellings.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DwellingsConfig, serviceConfig } from './config/service';
import Axios from 'axios';
import { registryConfig } from 'apps/shared/config/registry';

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
  constructor(private readonly config: ConfigService) {}

  async onApplicationBootstrap() {
    const registryHost = this.config.get('registry.service');
    const serviceConfig = this.config.get<DwellingsConfig>('dwellings');
    await Axios.create({}).post(
      registryHost,
      {
        name: serviceConfig.service,
        port: serviceConfig.port,
      }
    );
  }

}
