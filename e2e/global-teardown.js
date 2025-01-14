import { client } from './db'


async function globalTeardown() {
    console.error("Ending client connection.")
    await client.end();
}

export default globalTeardown;