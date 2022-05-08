import { ServiceConfig } from '@shared/types/service-config';

export type Config = {
  dwellings: ServiceConfig,
  db_connection_name: string
};

export const serviceConfig = (): Config => ({
  dwellings: {
    port: +process.env.PORT,
    hostname: process.env.HOSTNAME,
    service: process.env.APP_NAME,
  },
  db_connection_name: process.env.DB_CON_NAME,
});
