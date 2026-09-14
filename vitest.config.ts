import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // The CLI sleeps for four seconds of animation before it prints anything.
    testTimeout: 15_000
  }
})
