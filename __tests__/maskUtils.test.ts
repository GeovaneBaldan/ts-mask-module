import {
  onlyDigits,
  limitLength,
  applyPattern,
  isValidLength,
  matchesPattern
} from '../src/base/maskUtils'

describe('Mask Utils Tests', () => {
  test('onlyDigits should remove all non-numeric characters', () => {
    expect(onlyDigits('123.456-789')).toBe('123456789')
    expect(onlyDigits('(12) 3456-7890')).toBe('1234567890')
  })

  test('applyPattern should apply formatting pattern', () => {
    expect(applyPattern('12345678901', 'XXX.XXX.XXX-XX')).toBe('123.456.789-01')
    expect(applyPattern('987654321', '(XXX) XXX-XXX')).toBe('(987) 654-321')
  })

  test('matchesPattern should validate regex', () => {
    expect(
      matchesPattern('123.456.789-00', /^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    ).toBe(true)
    expect(matchesPattern('12345678900', /^\d{3}\.\d{3}\.\d{3}-\d{2}$/)).toBe(
      false
    )
  })

  test('limitLength should truncate strings', () => {
    expect(limitLength('123456789', 5)).toBe('12345')
    expect(limitLength('123', 5)).toBe('123')
  })

  test('isValidLength should validate string length', () => {
    expect(isValidLength('12345', 3, 5)).toBe(true)
    expect(isValidLength('12', 3)).toBe(false)
    expect(isValidLength('123456', undefined, 5)).toBe(false)
  })
})
