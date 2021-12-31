import {MigrationInterface, QueryRunner} from "typeorm";

export class allownullablesInFullauditentities1640858473908 implements MigrationInterface {
    name = 'allownullablesInFullauditentities1640858473908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "creatorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "creationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "updaterUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "updationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "deleteorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "deletionTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "creatorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "creationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "updaterUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "updationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "deleteorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "deletionTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "creatorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "creationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "updaterUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "updationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "deleteorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "deletionTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "creatorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "creationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "updaterUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "updationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "deleteorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "deletionTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "creatorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "creationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updaterUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updationTime" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleteorUserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deletionTime" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deletionTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleteorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updaterUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "creationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "creatorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "deletionTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "deleteorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "updationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "updaterUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "creationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Variant" ALTER COLUMN "creatorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "deletionTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "deleteorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "updationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "updaterUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "creationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Product" ALTER COLUMN "creatorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "deletionTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "deleteorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "updationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "updaterUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "creationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ALTER COLUMN "creatorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "deletionTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "deleteorUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "updationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "updaterUserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "creationTime" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Category" ALTER COLUMN "creatorUserId" SET NOT NULL`);
    }

}
