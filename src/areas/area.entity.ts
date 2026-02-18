import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Zone } from '../zones/zone.entity';
import { Vendor } from '../vendors/vendor.entity';

@Entity('areas')
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Zone, (zone) => zone.areas, { eager: true })
  zone: Zone;

  @OneToMany(() => Vendor, (vendor) => vendor.area)
  vendors: Vendor[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
