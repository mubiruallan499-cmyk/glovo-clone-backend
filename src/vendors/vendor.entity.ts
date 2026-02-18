import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from './products/product.entity';
import { Area } from '../areas/area.entity';

@Entity('vendors')
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;   // <-- must exist

  @Column()
  email: string;  // <-- must exist

  @ManyToOne(() => Area, (area) => area.vendors, { nullable: true })
  area: Area;

  @OneToMany(() => Product, (product) => product.vendor)
  products: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
