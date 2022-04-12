import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Products } from './../../products/entities/products.entity';

@Entity('restaurants')
export class Restaurants {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
}