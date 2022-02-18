import { ServiceConfig } from '@shared/types/service-config';

export type Config = {
  residents: ServiceConfig,
};

export const serviceConfig = (): Config => ({
  residents: {
    port: +process.env.PORT,
    hostname: process.env.HOSTNAME,
    service: process.env.APP_NAME,
  },
});
