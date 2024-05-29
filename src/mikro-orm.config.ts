import { EntityGenerator } from '@mikro-orm/entity-generator';
import { Migrator } from '@mikro-orm/migrations';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const isTestMode = process.env.NODE_ENV === 'test';

const config: Options = {
  driver: PostgreSqlDriver,
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT, 10),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: ['./dist/*/entities/*.entity.js'],
  // entitiesTs: ['../../modules/**/*.entity.ts'],
  debug: !isTestMode,
  highlighter: new SqlHighlighter(),
  // metadataProvider: TsMorphMetadataProvider,
  // registerRequestContext: false,
  extensions: [Migrator, EntityGenerator, SeedManager],
  migrations: {
    path: './migrations',
    pathTs: './migrations',
  },
  subscribers: [],
};

// Remove entitiesTs in test mode.
// Can't load entitiesTs in vitest
// if (isTestMode) delete config.entitiesTs;

export default config;
