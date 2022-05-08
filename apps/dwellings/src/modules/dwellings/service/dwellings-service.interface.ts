import { Dwelling } from '../entity/dwelling';

export interface IDwellingsService {
  findDwellingsByResidentIdentity(residentIdentity: string): Promise<Dwelling>;
}

export const dwellingsServiceKey = 'IDwellingsService';
