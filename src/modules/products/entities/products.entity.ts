import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Restaurants } from './../../restaurants/entities/restaurants.entity';
import { Extras } from './extras.entity';

@Entity('products')
export class Products {

  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  @JoinColumn()
  restaurant: Restaurants;

  @ManyToMany(() => Extras, extras => extras.products)
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
}