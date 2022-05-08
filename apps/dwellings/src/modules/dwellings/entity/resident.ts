import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Dwelling } from './dwelling';

@Entity('resident')
export class Resident {
  @PrimaryColumn() // will be inherited from resident
  public readonly id: string;

  @JoinColumn()
  @ManyToOne(() => Dwelling, dwelling => dwelling.residents)
  private _dwelling: Dwelling;

  get dwelling() {
    return this._dwelling;
  }
}
