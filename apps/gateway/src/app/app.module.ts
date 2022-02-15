import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { clientFactory } from 'apps/shared/client.factory';
import { registryConfig } from 'apps/shared/config/registry';
import { Services } from './config/services';
import { DwellingsController } from './http/dwellings/dwellings.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [ 'apps/gateway/.env' ],
      load: [registryConfig],
    }),
    ClientsModule.registerAsync([
      {
        name: Services.DWELLINGS,
        useFactory: clientFactory('dwellings'),
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  controllers: [ DwellingsController ],
  providers: [],
})
export class AppModule {}
