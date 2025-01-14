import { db } from './db'
import { sql } from "drizzle-orm";
import { user, session } from "../src/lib/server/db/schema";


async function wipeDatabase() {
  try {
    const tables = [user, session]; // Add all your table definitions here
    for (const table of tables) {
      await db.execute(sql`TRUNCATE TABLE ${table} CASCADE`);
    }
    console.log("Database wiped successfully!");
  } catch (error) {
    console.error("Error wiping the database:", error);
  }
};


async function globalSetup() {
    console.error("Wiping DB.")
    await wipeDatabase();
}

export default globalSetup;