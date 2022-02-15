import { Expose } from 'class-transformer';

export class ServiceDto {
  @Expose()
  public port: number;
  @Expose()
  public name: string;
}
