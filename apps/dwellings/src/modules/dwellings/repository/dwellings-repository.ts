import { EntityRepository, Repository } from 'typeorm';
import { Dwelling } from '../entity/dwelling';

@EntityRepository(Dwelling)
export class DwellingsRepository extends Repository<Dwelling> {
  public findByResident(residentIdentity: string) {
    return this.findOne({
      where: {
        residents: [
          {id: residentIdentity},
        ],
      },
    });
  }
}
