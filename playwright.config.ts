import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  outputDir: './playwright-report',
  testDir: './e2e',
  testMatch: ['desktop.spec.ts', 'mobile.spec.ts'],
  timeout: 30 * 1000,
  fullyParallel: false,
  workers: process.env.CI ? 1 : 1,
  reporter: process.env.CI
    ? [['github'], ['html', { outputFolder: 'test-report' }], ['list']]
    : [['html', { outputFolder: 'test-report' }], ['list']],
  use: {
    actionTimeout: 30 * 1000,
    headless: true,
    locale: 'de-DE',
    baseURL: 'http://localhost:3000',
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    video: 'on',
    trace: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
 webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;