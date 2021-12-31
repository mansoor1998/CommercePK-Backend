import {MigrationInterface, QueryRunner} from "typeorm";

export class addUnitcostUnitpriceInSkutable1640881818839 implements MigrationInterface {
    name = 'addUnitcostUnitpriceInSkutable1640881818839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" ADD "unitCost" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "unitPrice" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "unitPrice"`);
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "unitCost"`);
    }

}
