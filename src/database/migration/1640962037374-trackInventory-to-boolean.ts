import {MigrationInterface, QueryRunner} from "typeorm";

export class trackInventoryToBoolean1640962037374 implements MigrationInterface {
    name = 'trackInventoryToBoolean1640962037374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "trackInventory"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "trackInventory" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SKU" DROP COLUMN "trackInventory"`);
        await queryRunner.query(`ALTER TABLE "SKU" ADD "trackInventory" integer`);
    }

}
