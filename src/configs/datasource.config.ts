import { DataSource } from 'typeorm';
import { resolve } from 'path';

import databaseConfig from './database.config';

const options = databaseConfig() as any;

export default new DataSource({
  ...options,
  migrations: [resolve(process.cwd(), 'migrations/*{.ts,.js}')],
  logging: false,
});
