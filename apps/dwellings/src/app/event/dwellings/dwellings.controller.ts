import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DwellingsService } from '../../../modules/dwellings/service/dwellings.service';

@Controller()
export class DwellingsController {
  private readonly LOG = new Logger(DwellingsController.name);
  constructor(private readonly dwellingsService: DwellingsService) {}

  @MessagePattern('dwelling-find_by_resident')
  async findDwellings(residentId: string) {
    const dwellings = await this.dwellingsService
      .findDwellingsByResidentIdentity(residentId);
    return dwellings;
  }
}
