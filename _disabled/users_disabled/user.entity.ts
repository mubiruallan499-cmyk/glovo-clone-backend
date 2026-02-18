import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Wallet } from '../wallets/wallet.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Wallet, wallet => wallet.user, { cascade: true })
  @JoinColumn()
  wallet: Wallet;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];
}

