import postgres from 'postgres';
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js';
import { sql } from 'drizzle-orm';


for (let envVar of [
	'POSTGRES_USER',
	'POSTGRES_PASSWORD',
	'POSTGRES_DB',
	'POSTGRES_PORT',
]) {
	if (!process.env[envVar]) throw new Error(`${envVar} is not set`);
}

const client = postgres({
    user: process.env.POSTGRES_USER,
    host: "127.0.0.1",
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: false,
});

const db = drizzle(client);

await db.execute(sql`SET client_min_messages TO WARNING`)
/**
 Otherwise we see this logged:

    {
        severity_local: 'NOTICE',
        severity: 'NOTICE',
        code: '00000',
        message: 'truncate cascades to table "session"',
        file: 'tablecmds.c',
        line: '1958',
        routine: 'ExecuteTruncateGuts'
    }
 */

export { 
    client,
    db,
};



