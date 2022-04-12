import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRestaurantTable1649795882446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'restaurants',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'address',
                    type: 'varchar',
                },
                {
                    name: 'url_cover',
                    type: 'varchar',
                },
                {
                    name: 'url_logo',
                    type: 'varchar',
                },
                {
                    name: 'responsible',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurants');
    }
}
