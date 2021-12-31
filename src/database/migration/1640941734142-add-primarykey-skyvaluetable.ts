import {MigrationInterface, QueryRunner} from "typeorm";

export class addPrimarykeySkyvaluetable1640941734142 implements MigrationInterface {
    name = 'addPrimarykeySkyvaluetable1640941734142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKUValue" DROP CONSTRAINT "PK_15d067b986aa6f2316521f4796c"`);
        await queryRunner.query(`ALTER TABLE "SKUValue" ADD CONSTRAINT "PK_7d1408918d1cbfc89bec8f18c8c" PRIMARY KEY ("productId", "variantId", "sKUId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKUValue" DROP CONSTRAINT "PK_7d1408918d1cbfc89bec8f18c8c"`);
        await queryRunner.query(`ALTER TABLE "SKUValue" ADD CONSTRAINT "PK_15d067b986aa6f2316521f4796c" PRIMARY KEY ("productId")`);
    }

}
