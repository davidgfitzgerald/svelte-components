import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

for (let envVar of [
	'POSTGRES_USER',
	'POSTGRES_PASSWORD',
	'POSTGRES_DB',
	'POSTGRES_HOST',
	'POSTGRES_PORT',
]) {
	if (!env[envVar]) throw new Error(`${envVar} is not set`);
}

const client = postgres({
    user: env.POSTGRES_USER,
    host: env.POSTGRES_HOST,
    database: env.POSTGRES_DB,
    password: env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: false,
  });

export const db = drizzle(client);
