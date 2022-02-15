import { ConfigService } from '@nestjs/config';
import { ClientProvider, Transport } from '@nestjs/microservices';
import axios from 'axios';

export const clientFactory = (serviceName: string) =>
  async (configService: ConfigService) => {
    const host = configService.get('registry.service');
    const { data } = await axios.create({baseURL: host})
      .get('/' + serviceName);
    return {
      transport: Transport.TCP,
      options: {
        host: data.host,
        port: data.port,
      },
    } as ClientProvider;
  };
