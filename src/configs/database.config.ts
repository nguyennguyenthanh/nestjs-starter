import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export default registerAs<TypeOrmModuleOptions>('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: false,
  logging: process.env.NODE_ENV !== 'production',
  // entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../../migrations/*{.ts,.js}')],
  entities: ['dist/**/*.entity{.js,.ts}'],
  // migrations: ['dist/migrations/**/*{.js,.ts}'],
  migrationsRun: true,
}));
