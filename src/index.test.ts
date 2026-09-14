import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import main from './index.ts'

describe('main export', () => {
  let consoleLogOutput: string[] = []

  beforeEach(() => {
    consoleLogOutput = []
    vi.spyOn(console, 'log').mockImplementation((message: string) => {
      consoleLogOutput.push(message)
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('logs the expected intro and version', async () => {
    await main()

    expect(consoleLogOutput.length).toBeGreaterThan(0)

    const allOutput = consoleLogOutput.join('\n')
    expect(allOutput).toContain('https://syn.horse') // Main website
    expect(allOutput).toContain('https://github.com/synmux') // At least one social link
  })
})
