import { PhoneMask } from '../../masks/PhoneMask'

describe('PhoneMask', () => {
  const mask = new PhoneMask()

  it('formats mobile numbers correctly', () => {
    expect(mask.format('11987654321')).toBe('(11) 98765-4321')
    expect(mask.format('(11)987654321')).toBe('(11) 98765-4321')
  })

  it('formats landline numbers correctly', () => {
    expect(mask.format('1134567890')).toBe('(11) 3456-7890')
  })

  it('formats progressively while typing', () => {
    expect(mask.format('1')).toBe('(1')
    expect(mask.format('(11')).toBe('(11')
    expect(mask.format('119')).toBe('(11) 9')
    expect(mask.format('1198')).toBe('(11) 98')
    expect(mask.format('11987')).toBe('(11) 987')
    expect(mask.format('119876')).toBe('(11) 9876')
    expect(mask.format('1198765')).toBe('(11) 9876-5')
    expect(mask.format('11987654')).toBe('(11) 9876-54')
    expect(mask.format('119876543')).toBe('(11) 9876-543')
    expect(mask.format('1198765432')).toBe('(11) 9876-5432')
    expect(mask.format('11987654321')).toBe('(11) 98765-4321')
  })

  it('truncates extra digits beyond max length', () => {
    expect(mask.format('11987654321999')).toBe('(11) 98765-4321') // ignore beyond 11
  })

  it('returns empty string for empty input', () => {
    expect(mask.format('')).toBe('')
  })
})
