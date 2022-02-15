import { Module } from '@nestjs/common';
import { RegistryModule } from '@registry/modules/registry/registry.module';
import { RegistryController } from './http/registry/registry.controller';

@Module({
  imports: [RegistryModule],
  controllers: [RegistryController],
  providers: [],
})
export class AppModule {}
