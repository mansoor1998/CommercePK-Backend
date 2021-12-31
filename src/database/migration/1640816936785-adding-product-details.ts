import {MigrationInterface, QueryRunner} from "typeorm";

export class addingProductDetails1640816936785 implements MigrationInterface {
    name = 'addingProductDetails1640816936785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "SKU" ("id" uuid NOT NULL, "creatorUserId" uuid NOT NULL, "creationTime" TIMESTAMP NOT NULL, "updaterUserId" uuid NOT NULL, "updationTime" TIMESTAMP NOT NULL, "deleteorUserId" uuid NOT NULL, "deletionTime" TIMESTAMP NOT NULL, "isDeleted" boolean NOT NULL, "skuNumber" character varying NOT NULL, "skuName" character varying NOT NULL, "skuMessage" character varying NOT NULL, "trackInventory" integer NOT NULL, "inventoryLevel" integer NOT NULL, "smallImage" character varying NOT NULL, "mediumImage" character varying NOT NULL, "largeImage" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_d49f73953d2d2180817395a250a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Product" ("id" uuid NOT NULL, "creatorUserId" uuid NOT NULL, "creationTime" TIMESTAMP NOT NULL, "updaterUserId" uuid NOT NULL, "updationTime" TIMESTAMP NOT NULL, "deleteorUserId" uuid NOT NULL, "deletionTime" TIMESTAMP NOT NULL, "isDeleted" boolean NOT NULL, "title" character varying NOT NULL, "code" character varying NOT NULL, "isActive" boolean NOT NULL, "keywords" character varying NOT NULL, "description" text NOT NULL, "unitCost" numeric NOT NULL, "unitPrice" numeric NOT NULL, "weight" numeric NOT NULL, "smallImage" character varying NOT NULL, "mediumImage" character varying NOT NULL, "largeImage" character varying NOT NULL, "hasVariant" boolean NOT NULL, "status" character varying NOT NULL, "primaryCategoryId" uuid, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Variant" ("id" uuid NOT NULL, "creatorUserId" uuid NOT NULL, "creationTime" TIMESTAMP NOT NULL, "updaterUserId" uuid NOT NULL, "updationTime" TIMESTAMP NOT NULL, "deleteorUserId" uuid NOT NULL, "deletionTime" TIMESTAMP NOT NULL, "isDeleted" boolean NOT NULL, "name" character varying(256) NOT NULL, "description" text NOT NULL, "productId" uuid, CONSTRAINT "PK_148c66441ba19a4ce92f93ffc10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Option" ("id" uuid NOT NULL, "name" character varying(256) NOT NULL, "description" text NOT NULL, "productId" uuid NOT NULL, "variantId" uuid, CONSTRAINT "PK_2c3d226349263695f99657051c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD CONSTRAINT "FK_8e27418a15987b518fab3a046de" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_6c8251649daa97c5295f8cab703" FOREIGN KEY ("primaryCategoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Variant" ADD CONSTRAINT "FK_0646ccf9ed30e9b708aced6a755" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Option" ADD CONSTRAINT "FK_c5358f89c6876dc07a7a276a686" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Option" DROP CONSTRAINT "FK_c5358f89c6876dc07a7a276a686"`);
        await queryRunner.query(`ALTER TABLE "Variant" DROP CONSTRAINT "FK_0646ccf9ed30e9b708aced6a755"`);
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_6c8251649daa97c5295f8cab703"`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP CONSTRAINT "FK_8e27418a15987b518fab3a046de"`);
        await queryRunner.query(`DROP TABLE "Option"`);
        await queryRunner.query(`DROP TABLE "Variant"`);
        await queryRunner.query(`DROP TABLE "Product"`);
        await queryRunner.query(`DROP TABLE "SKU"`);
    }

}
