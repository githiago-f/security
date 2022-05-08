import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resident } from './resident';

@Entity('dwellings')
export class Dwelling {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Index({ unique: true })
  @Column({ unique: true })
  public readonly number: string;

  @Column()
  public readonly building: string;

  @OneToMany(() => Resident, res => res.dwelling)
  private _residents: Resident[];

  get residents() {
    return this._residents;
  }
}
