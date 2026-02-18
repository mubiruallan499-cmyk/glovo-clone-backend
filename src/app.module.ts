import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { VendorsModule } from './vendors/vendors.module';
import { ZonesModule } from './zones/zones.module';
import { CountriesModule } from './countries/countries.module';
import { ProductsModule } from './vendors/products/products.module';

@Module({
  imports: [
    // ENV
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // DATABASE
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
    }),

    // APP MODULES
    AuthModule,
    UsersModule,
    WalletsModule,
    OrdersModule,
    PaymentsModule,
    VendorsModule,
    ZonesModule,
    CountriesModule,
    ProductsModule,
  ],
})
export class AppModule {}
