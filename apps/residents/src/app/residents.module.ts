import { Module } from '@nestjs/common';
import { ResidentsService } from '../modules/residents/service/residents.service';
import { ResidentsController } from './http/residents/residents.controller';

@Module({
  imports: [],
  controllers: [ResidentsController],
  providers: [ResidentsService],
})
export class ResidentsModule {}
