import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { Client } from './clients/client.entity';
import { Product } from './products/product.entity';
import { Payment } from './payments/payment.entity';

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Client, Product, Payment],
  migrations: ['apps/api/src/migrations/*.ts'],
  synchronize: false
});
