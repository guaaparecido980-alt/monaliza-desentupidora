import { defineConfig, devices } from "@playwright/test";

/**
 * Testes rodam contra o build de produção (mais rápido e igual ao que vai ao ar).
 * Rodar: npm run build && npx playwright test
 * Para usar um servidor já aberto: BASE_URL=http://localhost:3201 npx playwright test
 */
const BASE = process.env.BASE_URL ?? "http://localhost:3201";

export default defineConfig({
  testDir: "./tests",
  outputDir: "test-results/playwright",
  timeout: 60_000,
  fullyParallel: true,
  workers: 4,
  reporter: [["list"]],
  use: { baseURL: BASE, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "celular", use: { ...devices["Pixel 7"] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: "npx -y serve@14.2.4 out -l tcp://localhost:3201 --no-port-switching", url: BASE, reuseExistingServer: true, timeout: 120_000 },
});
