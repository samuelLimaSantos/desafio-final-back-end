import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const configuration = () => ({
  stage: process.env.STAGE,
  port: parseInt(process.env.PORT, 10) || 3001,
  database : {
    type: 'postgres',
    logging: process.env.DB_LOGGING === 'true',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
  } as TypeOrmModuleOptions
})

export { configuration };