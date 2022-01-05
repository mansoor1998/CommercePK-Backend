import {MigrationInterface, QueryRunner} from "typeorm";

export class dropUser1641399759371 implements MigrationInterface {
    name = 'dropUser1641399759371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "isStatic"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "firebaseUid"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "PK_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "PK_9862f679340fb2388436a5ab3e4"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "User" ADD "firebaseUid" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "User" ADD "isStatic" boolean NOT NULL`);
    }

}
