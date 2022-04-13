import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductsExtrasTable1649797682089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products_extras',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'id_product',
                    type: 'uuid',
                },
                {
                    name: 'id_extra',
                    type: 'uuid',
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

        await queryRunner.createForeignKeys('products_extras', [
            new TableForeignKey({
                name: 'fk_products_extras_products',
                columnNames: ['id_product'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products',
            }),
            new TableForeignKey({
                name: 'fk_products_extras_extras',
                columnNames: ['id_extra'],
                referencedColumnNames: ['id'],
                referencedTableName: 'extras',
            }),

        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products_extras');
    }

}
