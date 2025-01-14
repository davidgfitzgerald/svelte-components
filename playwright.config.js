import { defineConfig } from '@playwright/test';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const TEST_DIR = "e2e"

export default defineConfig({
	webServer: {
		// command: 'npm run build && npm run preview',
		// port: 4173
		command: 'docker compose up --force-recreate --build -V',
		port: 5173,
		reuseExistingServer: true,
	},

	testDir: TEST_DIR,

	expect: {
		timeout: 2000,
	},

	globalSetup: require.resolve(`./${TEST_DIR}/global-setup.js`),
	globalTeardown: require.resolve(`./${TEST_DIR}/global-teardown.js`),
});
