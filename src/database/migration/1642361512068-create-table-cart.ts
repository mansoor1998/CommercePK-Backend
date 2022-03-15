import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCart1642361512068 implements MigrationInterface {
    name = 'createTableCart1642361512068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cart" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "skuId" uuid NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "UQ_b56be3f0b568c570fd47b8b6b47" UNIQUE ("skuId", "userId"), CONSTRAINT "PK_012c8ac0dc98012aed2f7766e01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Cart" ADD CONSTRAINT "FK_70b2b596f5458e9cdf42f2bb4ff" FOREIGN KEY ("skuId") REFERENCES "SKU"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Cart" ADD CONSTRAINT "FK_c93d6f0ae7b8bcae9439e871ab1" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cart" DROP CONSTRAINT "FK_c93d6f0ae7b8bcae9439e871ab1"`);
        await queryRunner.query(`ALTER TABLE "Cart" DROP CONSTRAINT "FK_70b2b596f5458e9cdf42f2bb4ff"`);
        await queryRunner.query(`DROP TABLE "Cart"`);
    }

}
