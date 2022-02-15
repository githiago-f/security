export type DwellingsConfig = {
  port: number,
  hostname: string,
  service: string
}

export type Config = {
  dwellings: DwellingsConfig,
};

export const serviceConfig = (): Config => ({
  dwellings: {
    port: +process.env.PORT,
    hostname: process.env.HOSTNAME,
    service: process.env.APP_NAME,
  },
});
