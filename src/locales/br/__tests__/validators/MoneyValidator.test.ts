import { MoneyValidator } from '../../validators/MoneyValidator'

describe('MoneyValidator', () => {
  const validator = new MoneyValidator()

  it('accepts valid money values', () => {
    expect(validator.validate('R$ 1.234,56')).toBe(true)
    expect(validator.validate('R$ -12.345,00')).toBe(true)
  })

  it('rejects invalid format', () => {
    expect(validator.validate('R$ 1234,56')).toBe(false) // no thousand separator
    expect(validator.validate('R$ 1.234.567,89')).toBe(true)
    expect(validator.validate('R$ 1.234,567')).toBe(false) // 3+ decimals
    expect(validator.validate('R$ abc')).toBe(false)
  })

  it('respects custom prefix and decimal precision', () => {
    const usd = new MoneyValidator({ prefix: '$', maxDecimalPlaces: 3 })
    expect(usd.validate('$ 1.234,567')).toBe(true)
    expect(usd.validate('$ 1.234,56')).toBe(true)
    expect(usd.validate('$ 1.234,5678')).toBe(false)
  })

  it('validates non-negative if configured', () => {
    const nonNegative = new MoneyValidator({ allowNegative: false })
    expect(nonNegative.validate('R$ -1.234,56')).toBe(false)
    expect(nonNegative.validate('R$ 1.234,56')).toBe(true)
  })

  it('validates empty input', () => {
    expect(validator.validate('')).toBe(false)
  })

  it('validates null input', () => {
    expect(validator.validate(null as never)).toBe(false)
  })

  it('validates undefined input', () => {
    expect(validator.validate(undefined as never)).toBe(false)
  })
})
