import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dwelling } from '../entity/dwelling';
import { DwellingsRepository } from '../repository/dwellings-repository';
import { IDwellingsService } from './dwellings-service.interface';

@Injectable()
export class DwellingsService implements IDwellingsService {
  constructor(
    @InjectRepository(DwellingsRepository)
    private readonly dwellingsRepository: DwellingsRepository
  ) {}

  public getHello(): string {
    return 'Hello World!';
  }

  findDwellingsByResidentIdentity(residentIdentity: string): Promise<Dwelling> {
    return this.dwellingsRepository.findByResident(residentIdentity);
  }
}
