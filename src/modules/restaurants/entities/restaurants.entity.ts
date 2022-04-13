import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Products } from './../../products/entities/products.entity';

@Entity('restaurants')
export class Restaurants {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column({ name: 'url_cover'})
  urlCover: string;

  @Column({ name: 'url_logo'})
  urlLogo: string;

  @Column()
  responsible: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Products, products => products.restaurant)
  products: Products[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}