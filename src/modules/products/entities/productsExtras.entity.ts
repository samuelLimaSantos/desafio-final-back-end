import { Extras } from './extras.entity';
import { Products } from './products.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity('products_extras')
export class ProductsExtras {
  @PrimaryColumn()
  readonly id: string;

  @Column({ name: 'id_product', nullable: true })
  idProduct: string;

  @ManyToOne(() => Products, (products) => products.productsExtras, { nullable: true })
  @JoinColumn([{ name: 'id_product', referencedColumnName: 'id' }])
  product: Products | null;

  @Column({ name: 'id_extra', nullable: true })
  idExtra: string;

  @ManyToOne(() => Extras, (extras) => extras, { nullable: true, eager: true })
  @JoinColumn([{ name: 'id_extra', referencedColumnName: 'id' }])
  extra: Extras | null;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}