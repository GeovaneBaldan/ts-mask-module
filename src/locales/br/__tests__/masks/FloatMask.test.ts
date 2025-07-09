import { FloatMask } from '../../masks/FloatMask'

describe('FloatMask', () => {
  const mask = new FloatMask(3, 20)

  it('formats basic input correctly', () => {
    expect(mask.format('123456')).toBe('123,456')
  })

  it('pads when input is too short', () => {
    expect(mask.format('1')).toBe('0,001')
    expect(mask.format('')).toBe('')
  })

  it('applies thousands separator', () => {
    expect(mask.format('1234567')).toBe('1.234,567')
  })

  it('ignores user punctuation', () => {
    expect(mask.format('1.2,3/4-5')).toBe('12,345')
  })

  it('limits decimal digits', () => {
    const mask = new FloatMask(2, 20)
    expect(mask.format('1234567')).toBe('12.345,67')
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

  it('remove mask when unmask is called', () => {
    expect(mask.unmask('123,456')).toBe('123456')
  })
})
