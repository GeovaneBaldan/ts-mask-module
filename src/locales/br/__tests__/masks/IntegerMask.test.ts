import { IntegerMask } from '../../masks/IntegerMask'

describe('IntegerMask', () => {
  const mask = new IntegerMask()

  it('formats basic input correctly', () => {
    expect(mask.format('123456')).toBe('123456')
  })

  it('limits input length', () => {
    const mask = new IntegerMask(5)
    expect(mask.format('123456')).toBe('12345')
  })

  it('ignores user punctuation', () => {
    expect(mask.format('1.2,3/4-5')).toBe('12345')
  })

  it('ignores non-numeric characters', () => {
    expect(mask.format('abc123')).toBe('123')
  })

  it('ignores empty input', () => {
    expect(mask.format('')).toBe('')
  })

  it('ignores null input', () => {
    expect(mask.format(null as never)).toBe('')
  })

  it('ignores undefined input', () => {
    expect(mask.format(undefined as never)).toBe('')
  })
})
