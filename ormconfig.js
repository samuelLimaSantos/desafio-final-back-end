module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: [__dirname + '/src/shared/infra/migrations/**/*{.ts,.js}'],
  entities: [__dirname + '/src/modules/**/*.entity{.ts,.js}'],
  migrationsRun: false,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/shared/infra/migrations',
  },
}
