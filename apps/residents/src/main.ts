import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ResidentsModule } from './app/residents.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ResidentsModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen();
}
bootstrap();
