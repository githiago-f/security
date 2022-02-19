import { ServiceConfig } from '@shared/types/service-config';
import axios from 'axios';

export async function registerService(
  registryHost: string,
  { service, port }: ServiceConfig
) {
  return axios.create({}).post(
    registryHost,
    {
      name: service,
      port,
    }
  );
}
