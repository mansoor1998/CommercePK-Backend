import {MigrationInterface, QueryRunner} from "typeorm";

export class removePasswordUser1641412297110 implements MigrationInterface {
    name = 'removePasswordUser1641412297110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "password" character varying(256) NOT NULL`);
    }

}
