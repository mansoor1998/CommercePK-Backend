import {MigrationInterface, QueryRunner} from "typeorm";

export class createSKUValueTable1640818177585 implements MigrationInterface {
    name = 'createSKUValueTable1640818177585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "SKUValue" ("productId" uuid NOT NULL, "variantId" uuid NOT NULL, "optionId" uuid, "sKUId" uuid NOT NULL, CONSTRAINT "PK_7d1408918d1cbfc89bec8f18c8c" PRIMARY KEY ("productId", "variantId", "sKUId"))`);
        await queryRunner.query(`ALTER TABLE "SKUValue" ADD CONSTRAINT "FK_40c9cb65472aca4ced4999b60c1" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "SKUValue" ADD CONSTRAINT "FK_9e927f48df6fbf8267cadf1ce9f" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "SKUValue" ADD CONSTRAINT "FK_d9b1fc266e1ffa64ba994e95ef7" FOREIGN KEY ("sKUId") REFERENCES "SKU"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKUValue" DROP CONSTRAINT "FK_d9b1fc266e1ffa64ba994e95ef7"`);
        await queryRunner.query(`ALTER TABLE "SKUValue" DROP CONSTRAINT "FK_9e927f48df6fbf8267cadf1ce9f"`);
        await queryRunner.query(`ALTER TABLE "SKUValue" DROP CONSTRAINT "FK_40c9cb65472aca4ced4999b60c1"`);
        await queryRunner.query(`DROP TABLE "SKUValue"`);
    }

}
