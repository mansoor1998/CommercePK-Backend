import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableSkuSetNullableTrue1640941133299 implements MigrationInterface {
    name = 'alterTableSkuSetNullableTrue1640941133299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuMessage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "inventoryLevel" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "unitCost" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "unitPrice" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "smallImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "mediumImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "largeImage" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "largeImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "mediumImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "smallImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "unitPrice" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "unitCost" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "inventoryLevel" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuMessage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "skuName" SET NOT NULL`);
    }

}
