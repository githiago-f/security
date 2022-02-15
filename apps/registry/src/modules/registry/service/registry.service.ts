import { ConflictException, Injectable } from '@nestjs/common';
import { RegistryRepository } from '../repository/registry-repository';

@Injectable()
export class RegistryService {
  private repository = new RegistryRepository();

  register(ip: string, name: string, port: number) {
    if(this.repository.get(name)) {
      return new ConflictException();
    }
    return this.repository.register(ip, name, port);
  }

  get(name: string) {
    return this.repository.get(name);
  }
}
