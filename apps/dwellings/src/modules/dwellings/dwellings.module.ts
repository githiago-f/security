import { Module } from '@nestjs/common';
import { DwellingsService } from './service/dwellings.service';

@Module({
  providers: [DwellingsService],
  exports: [DwellingsService],
})
export class DwellingsModule {}
