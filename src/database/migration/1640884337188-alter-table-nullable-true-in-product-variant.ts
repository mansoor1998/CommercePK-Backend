import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableNullableTrueInProductVariant1640884337188 implements MigrationInterface {
    name = 'alterTableNullableTrueInProductVariant1640884337188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "code" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "keywords" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "weight" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "smallImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "mediumImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "largeImage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "largeImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "mediumImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "smallImage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "weight" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "keywords" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "code" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "isActive" boolean NOT NULL`);
    }

}
