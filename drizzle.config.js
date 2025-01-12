import { defineConfig } from 'drizzle-kit'
// import { env } from '$env/dynamic/private';
// Drizzle Kit is for migrations
// Drizzle ORM is for use in source code

for (let envVar of [
	'POSTGRES_USER',
	'POSTGRES_PASSWORD',
	'POSTGRES_DB',
	'POSTGRES_HOST',
	'POSTGRES_PORT',
]) {
	if (!process.env[envVar]) throw new Error(`${envVar} is not set`);
}


// via connection params
export default defineConfig({
	schema: './src/lib/server/db/schema.js',

  dbCredentials: {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	ssl: false, // can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
  },

  verbose: true,
  strict: true,
  dialect: 'postgresql'
})