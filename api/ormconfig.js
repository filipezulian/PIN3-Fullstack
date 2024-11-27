const dir = 'src';

module.exports = {
    type: 'postgres',
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    options: {
        trustServerCertificate: true,
        encrypt: false,
    },
    migrations: [`./${dir}/database/migrations/*.*`],
    seeds: [`${dir}/database/seed.ts`],
    entities: [`./src/modules/**/entities/*.*`],
    cli: {
        migrationsDir: `./${dir}/database/migrations`,
    },
    synchronize: true
};
