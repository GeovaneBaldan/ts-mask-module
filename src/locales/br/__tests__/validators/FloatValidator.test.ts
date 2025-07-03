import { FloatValidator } from '../../validators/FloatValidator'

describe('FloatValidator', () => {
  const validator = new FloatValidator(3)

  it('validates correct float format', () => {
    expect(validator.validate('123,456')).toBe(true)
  })

  it('rejects more than allowed decimal digits', () => {
    expect(validator.validate('123,4567')).toBe(false)
  })

  it('rejects input too long', () => {
    expect(validator.validate('123456789012345678901')).toBe(false)
  })

  it('rejects wrong format', () => {
    expect(validator.validate('123.456')).toBe(false)
    expect(validator.validate('123,45,6')).toBe(false)
    expect(validator.validate('abc')).toBe(false)
  })

  it('rejects empty input', () => {
    expect(validator.validate('')).toBe(false)
  })

  it('rejects null input', () => {
    expect(validator.validate(null as never)).toBe(false)
  })
})
