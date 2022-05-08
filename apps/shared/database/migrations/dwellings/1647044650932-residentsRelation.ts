import {MigrationInterface, QueryRunner} from 'typeorm';

export class residentsRelation1647044650932 implements MigrationInterface {
  name = 'residentsRelation1647044650932';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "public"."IDX_e66c523b798227993d8a820cde"');
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_e66c523b798227993d8a820cde" ON "dwellings" ("number") ');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX "public"."IDX_e66c523b798227993d8a820cde"');
    await queryRunner.query('CREATE INDEX "IDX_e66c523b798227993d8a820cde" ON "dwellings" ("number") ');
  }

}
