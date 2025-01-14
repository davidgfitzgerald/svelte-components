import postgres from 'postgres';
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js';

for (let envVar of [
	'POSTGRES_USER',
	'POSTGRES_PASSWORD',
	'POSTGRES_DB',
	'POSTGRES_PORT',
]) {
	if (!process.env[envVar]) throw new Error(`${envVar} is not set`);
}

export const client = postgres({
    user: process.env.POSTGRES_USER,
    host: "127.0.0.1",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: false,
});

export const db = drizzle(client);



