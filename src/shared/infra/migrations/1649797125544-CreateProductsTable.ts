import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductsTable1649797125544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'id_restaurant',
                    type: 'uuid',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'url_image',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'real',
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
        }));

        await queryRunner.createForeignKey('products', new TableForeignKey({
            name: 'fk_products_restaurants',
            columnNames: ['id_restaurant'],
            referencedColumnNames: ['id'],
            referencedTableName: 'restaurants',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
