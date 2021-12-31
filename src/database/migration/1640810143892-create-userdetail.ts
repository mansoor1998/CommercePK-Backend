import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserdetail1640810143892 implements MigrationInterface {
    name = 'createUserdetail1640810143892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "UserDetail" ("id" uuid NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "postalCode" character varying NOT NULL, "country" character varying NOT NULL, "mobile" character varying NOT NULL, CONSTRAINT "PK_30adbab5c5946b6e34cfa0b5f76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "User" ADD "userDetailId" uuid`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_960423245246b824ea66ca32a69" UNIQUE ("userDetailId")`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_960423245246b824ea66ca32a69" FOREIGN KEY ("userDetailId") REFERENCES "UserDetail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_960423245246b824ea66ca32a69"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_960423245246b824ea66ca32a69"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "userDetailId"`);
        await queryRunner.query(`DROP TABLE "UserDetail"`);
    }

}
