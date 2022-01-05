import {MigrationInterface, QueryRunner} from "typeorm";

export class primaryUserChanges1641399444836 implements MigrationInterface {
    name = 'primaryUserChanges1641399444836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "creatorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "updaterUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "deleteorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "creatorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "updaterUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "deleteorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "creatorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "updaterUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "deleteorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "creatorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "updaterUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "deleteorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "creatorUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "updaterUserId" character varying`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "deleteorUserId" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "deleteorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "updaterUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "creatorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "deleteorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "updaterUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD "creatorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "deleteorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "updaterUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Product" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Product" ADD "creatorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "deleteorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "updaterUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "creatorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "deleteorUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "deleteorUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "updaterUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "updaterUserId" uuid`);
        await queryRunner.query(`ALTER TABLE "Category" DROP COLUMN "creatorUserId"`);
        await queryRunner.query(`ALTER TABLE "Category" ADD "creatorUserId" uuid`);
    }

}
