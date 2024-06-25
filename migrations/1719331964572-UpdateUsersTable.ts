import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsersTable1719331964572 implements MigrationInterface {
    name = 'UpdateUsersTable1719331964572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
