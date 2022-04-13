import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Products } from "./products.entity";
import { ProductsExtras } from "./productsExtras.entity";

@Entity('extras')
export class Extras {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Products, products => products.extras)
  products: Products[];

  @OneToMany(() => ProductsExtras, productsExtras => productsExtras.extra)
  productsExtras: ProductsExtras[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}