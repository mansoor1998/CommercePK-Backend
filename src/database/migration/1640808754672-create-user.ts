import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1640808754672 implements MigrationInterface {
    name = 'createUser1640808754672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL, "creatorUserId" uuid NOT NULL, "creationTime" TIMESTAMP NOT NULL, 
        "updaterUserId" uuid NOT NULL, "updationTime" TIMESTAMP NOT NULL, "deleteorUserId" uuid NOT NULL, "deletionTime" TIMESTAMP NOT NULL, 
        "isDeleted" boolean NOT NULL, "username" character varying(256) NOT NULL, "email" character varying(256) NOT NULL, 
        "password" character varying(256) NOT NULL, "isActive" boolean NOT NULL, "status" character varying NOT NULL, 
        "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
