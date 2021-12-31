import {MigrationInterface, QueryRunner} from "typeorm";

export class skunumberNullableTrue1640959674498 implements MigrationInterface {
    name = 'skunumberNullableTrue1640959674498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuNumber" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuNumber" SET NOT NULL`);
    }

}
