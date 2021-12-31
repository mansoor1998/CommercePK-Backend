import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategory1640809405760 implements MigrationInterface {
    name = 'createCategory1640809405760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Category" ("id" uuid NOT NULL, "creatorUserId" uuid NOT NULL, 
        "creationTime" TIMESTAMP NOT NULL, "updaterUserId" uuid NOT NULL, "updationTime" TIMESTAMP NOT NULL, 
        "deleteorUserId" uuid NOT NULL, "deletionTime" TIMESTAMP NOT NULL, "isDeleted" boolean NOT NULL, 
        "name" character varying(256) NOT NULL, "description" text NOT NULL, "displayName" character varying(256) NOT NULL, 
        "smallImage" character varying NOT NULL, "mediumImage" character varying NOT NULL, 
        "largeImage" character varying NOT NULL, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Category"`);
    }

}
