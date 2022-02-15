export class RegistryRepository {
  private data = new Map();

  public register(ip: string, serviceName: string, port: number) {
    this.data.set(serviceName, {
      host: ip.replace('::ffff:', ''),
      ip,
      port,
      serviceName,
    });
    return this.get(serviceName);
  }

  public get(serviceName: string) {
    return this.data.get(serviceName) || null;
  }
}
