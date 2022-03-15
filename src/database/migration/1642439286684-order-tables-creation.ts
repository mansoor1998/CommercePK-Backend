import {MigrationInterface, QueryRunner} from "typeorm";

export class orderTablesCreation1642439286684 implements MigrationInterface {
    name = 'orderTablesCreation1642439286684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "OrderItem" ("id" uuid NOT NULL, "total" numeric, "weight" numeric, "quantity" integer, "unitCost" numeric, "unitPrice" numeric, "code" character varying, "name" character varying, "image" character varying, "productId" character varying, "skuId" character varying, "orderId" uuid, CONSTRAINT "PK_6bdc02af31674c4216a6b0a8b39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Order" ("id" uuid NOT NULL, "creatorUserId" character varying, "creationTime" TIMESTAMP, "updaterUserId" character varying, "updationTime" TIMESTAMP, "deleteorUserId" character varying, "deletionTime" TIMESTAMP, "isDeleted" boolean NOT NULL, "orderNumber" character varying, "userName" character varying, "trackingNumber" character varying, "subtotal" numeric, "total" numeric, "shipping" numeric, "tax" numeric, "weight" numeric, "quantity" integer, "status" character varying, "firstName" character varying, "lastName" character varying, CONSTRAINT "PK_3d5a3861d8f9a6db372b2b317b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "OrderDelivery" ("id" uuid NOT NULL, "trackingNumber" character varying, "subtotal" numeric, "total" numeric, "shipping" numeric, "tax" numeric, "delivered" boolean, "status" character varying, "organization" character varying, "address" character varying, "postalCode" character varying, "city" character varying, "country" character varying, "phone" character varying, "orderId" uuid, CONSTRAINT "REL_7b5facd190e28853327d91877d" UNIQUE ("orderId"), CONSTRAINT "PK_a8e5a392d1a96cb35d7369e96f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Payment" ("id" uuid NOT NULL, "status" character varying, "cardName" character varying, "cardType" character varying, "cardDate" character varying, "cardNumber" character varying, "cardVerificationValue" character varying, "paymentType" character varying, "orderId" uuid, CONSTRAINT "REL_23b99029eabbb5212833ed3795" UNIQUE ("orderId"), CONSTRAINT "PK_07e9fb9a8751923eb876d57a575" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "OrderItem" ADD CONSTRAINT "FK_c94ace27164b9ffde93ebdbe95c" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "OrderDelivery" ADD CONSTRAINT "FK_7b5facd190e28853327d91877d7" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Payment" ADD CONSTRAINT "FK_23b99029eabbb5212833ed37957" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Payment" DROP CONSTRAINT "FK_23b99029eabbb5212833ed37957"`);
        await queryRunner.query(`ALTER TABLE "OrderDelivery" DROP CONSTRAINT "FK_7b5facd190e28853327d91877d7"`);
        await queryRunner.query(`ALTER TABLE "OrderItem" DROP CONSTRAINT "FK_c94ace27164b9ffde93ebdbe95c"`);
        await queryRunner.query(`DROP TABLE "Payment"`);
        await queryRunner.query(`DROP TABLE "OrderDelivery"`);
        await queryRunner.query(`DROP TABLE "Order"`);
        await queryRunner.query(`DROP TABLE "OrderItem"`);
    }

}
