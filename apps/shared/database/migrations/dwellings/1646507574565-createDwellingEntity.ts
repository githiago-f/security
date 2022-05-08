import {MigrationInterface, QueryRunner} from 'typeorm';

export class createDwellingEntity1646507574565 implements MigrationInterface {
  name = 'createDwellingEntity1646507574565';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "resident" ("id" character varying NOT NULL, "DwellingId" uuid, CONSTRAINT "PK_f1a321823d6f69d0e348535fd37" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "dwellings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number" character varying NOT NULL, "building" character varying NOT NULL, CONSTRAINT "UQ_e66c523b798227993d8a820cde6" UNIQUE ("number"), CONSTRAINT "PK_a288cc8296f22c2a7cea4954a3b" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE INDEX "IDX_e66c523b798227993d8a820cde" ON "dwellings" ("number") ');
    await queryRunner.query('ALTER TABLE "resident" ADD CONSTRAINT "FK_885d9867be6c24b82894598ad14" FOREIGN KEY ("DwellingId") REFERENCES "dwellings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "resident" DROP CONSTRAINT "FK_885d9867be6c24b82894598ad14"');
    await queryRunner.query('DROP INDEX "public"."IDX_e66c523b798227993d8a820cde"');
    await queryRunner.query('DROP TABLE "dwellings"');
    await queryRunner.query('DROP TABLE "resident"');
  }

}
