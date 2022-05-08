import {MigrationInterface, QueryRunner} from 'typeorm';

export class createDatabases1646505098337 implements MigrationInterface {
  name = 'createDatabases1646505098337';
  databases = [
    'dwellings',
    'residents'
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    if(queryRunner.isTransactionActive) {
      await queryRunner.commitTransaction();
    }
    for(const database of this.databases) {
      if(await queryRunner.hasDatabase(database)) {
        continue;
      }
      await queryRunner.createDatabase(database);
    }
    if(!queryRunner.isTransactionActive) {
      await queryRunner.startTransaction();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    if(queryRunner.isTransactionActive) {
      await queryRunner.commitTransaction();
    }
    for(const database of this.databases) {
      await queryRunner.dropDatabase(database);
    }
    if(!queryRunner.isTransactionActive) {
      await queryRunner.startTransaction();
    }
  }

}
