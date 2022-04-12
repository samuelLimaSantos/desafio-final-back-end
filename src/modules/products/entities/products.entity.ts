import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}