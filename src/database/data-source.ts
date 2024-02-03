import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
  entities: ['src/**/entity/*.entity.ts'],
});
