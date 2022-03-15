import {MigrationInterface, QueryRunner} from "typeorm";

export class removeUserAssociation1642420310388 implements MigrationInterface {
    name = 'removeUserAssociation1642420310388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cart" DROP CONSTRAINT "FK_c93d6f0ae7b8bcae9439e871ab1"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cart" ADD CONSTRAINT "FK_c93d6f0ae7b8bcae9439e871ab1" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
