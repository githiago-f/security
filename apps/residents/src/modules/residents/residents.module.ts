import { Module } from '@nestjs/common';
import { ResidentsService } from './service/residents.service';

@Module({
  providers: [ResidentsService],
  exports: [ResidentsService],
})
export class ResidentsModule {}
