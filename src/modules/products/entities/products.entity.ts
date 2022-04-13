import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Restaurants } from './../../restaurants/entities/restaurants.entity';
import { Extras } from './extras.entity';
import { ProductsExtras } from "./productsExtras.entity";

@Entity('products')
export class Products {

  @PrimaryColumn()
  readonly id: string;

  @Column({ name: 'id_restaurant'})
  idRestaurant: string;

  @Column()
  name: string;

  @Column({ name: 'url_image'})
  urlImage: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Restaurants, restaurants => restaurants.products)
  @JoinColumn({ name: 'id_restaurant', referencedColumnName: 'id'})	
  restaurant: Restaurants;

  @ManyToMany(() => Extras, extras => extras.products, { cascade: true })
  @JoinTable({
    name: 'products_extras',
    joinColumn: {
      name: 'id_product',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_extra',
      referencedColumnName: 'id',
    },
  })
  extras: Extras[];

  @OneToMany(() => ProductsExtras, productsExtras => productsExtras.product, {
    cascade: ['insert', 'update', 'remove', 'recover', 'soft-remove'],
  })
  productsExtras: ProductsExtras[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}