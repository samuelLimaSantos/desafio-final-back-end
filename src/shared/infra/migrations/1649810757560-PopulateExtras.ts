import {MigrationInterface, QueryRunner} from "typeorm";
import { EXTRAS_OBJECT } from './../../constants/index';
import { Extras } from './../../../modules/products/entities/extras.entity';

export class PopulateExtras1649810757560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const extras = queryRunner.manager.getRepository(Extras).create(EXTRAS_OBJECT);

        await queryRunner.manager.getRepository(Extras).save(extras);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM products_extras`);

        await queryRunner.query(`DELETE FROM extras`);
    }

}
