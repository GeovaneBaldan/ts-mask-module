import { PhoneValidator } from '../../validators/PhoneValidator'

describe('PhoneValidator', () => {
  const validator = new PhoneValidator()

  it('validates mobile number', () => {
    expect(validator.validate('(11) 98765-4321')).toBe(true)
    expect(validator.validate('11987654321')).toBe(true)
  })

  it('validates landline number', () => {
    expect(validator.validate('(11) 3456-7890')).toBe(true)
    expect(validator.validate('1134567890')).toBe(true)
  })

  it('rejects invalid DDD', () => {
    const customValidator = new PhoneValidator({ allowedDDDs: ['21'] })
    expect(customValidator.validate('(11) 98765-4321')).toBe(false)
    expect(customValidator.validate('(21) 98765-4321')).toBe(true)
  })

  it('respects only mobile option', () => {
    const onlyMobile = new PhoneValidator({ allowLandline: false })
    expect(onlyMobile.validate('(11) 98765-4321')).toBe(true)
    expect(onlyMobile.validate('(11) 3456-7890')).toBe(false)
  })

  it('respects only landline option', () => {
    const onlyLandline = new PhoneValidator({ allowMobile: false })
    expect(onlyLandline.validate('(11) 98765-4321')).toBe(false)
    expect(onlyLandline.validate('(11) 3456-7890')).toBe(true)
  })

  it('rejects short or long numbers', () => {
    expect(validator.validate('1198')).toBe(false)
    expect(validator.validate('11987654321123')).toBe(false)
  })

  it('rejects completely invalid strings', () => {
    expect(validator.validate('hello')).toBe(false)
    expect(validator.validate('')).toBe(false)
  })
})
