import { expect, test } from '@playwright/test';

const APP_PORT=5173
const BASE_URL=`http://localhost:${APP_PORT}`

test('user redirected to login page', async ({ page }) => {
  // Start by navigating to the root path
  await page.goto('/');

  // Wait for the page to navigate to /login
  await page.waitForURL('/login');

  // Assert that the current URL is /login
  expect(page.url()).toBe(`${BASE_URL}/login`); // Replace with your actual base URL
});

test('login form has visible fields', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByLabel("username")).toBeVisible()
  await expect(page.getByLabel("password")).toBeVisible()
})

test('register new user', async ({ page }) => {
  await page.goto('/login')

  await page.getByLabel('username').fill('david');
  await page.getByLabel('password').fill('secret-password');
  
  await page.getByRole('button', { name: 'Register' }).click();
  
  await expect(page.getByText('Hi, david!')).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });