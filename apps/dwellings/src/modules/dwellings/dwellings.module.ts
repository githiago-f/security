import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DwellingsRepository } from './repository/dwellings-repository';
import { DwellingsService } from './service/dwellings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DwellingsRepository,
    ]),
  ],
  providers: [DwellingsService],
  exports: [DwellingsService],
})
export class DwellingsModule {}
