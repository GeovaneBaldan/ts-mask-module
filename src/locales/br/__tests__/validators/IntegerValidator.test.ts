import { IntegerValidator } from '../../validators/IntegerValidator'

describe('IntegerValidator', () => {
  const validator = new IntegerValidator()

  it('validates correct integer format', () => {
    expect(validator.validate('123456')).toBe(true)
  })

  it('rejects input too long', () => {
    expect(validator.validate('1234567890123456')).toBe(false)
  })

  it('rejects wrong format', () => {
    expect(validator.validate('123456a')).toBe(false)
    expect(validator.validate('abc')).toBe(false)
    expect(validator.validate('')).toBe(false)
  })

  it('rejects null input', () => {
    expect(validator.validate(null as never)).toBe(false)
  })

  it('rejects undefined input', () => {
    expect(validator.validate(undefined as never)).toBe(false)
  })
})
