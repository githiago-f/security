import { ServiceConfig } from '@shared/types/service-config';

export type Config = {
  dwellings: ServiceConfig,
};

export const serviceConfig = (): Config => ({
  dwellings: {
    port: +process.env.PORT,
    hostname: process.env.HOSTNAME,
    service: process.env.APP_NAME,
  },
});
