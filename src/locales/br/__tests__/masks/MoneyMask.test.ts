import { MoneyMask } from '../../masks/MoneyMask'

describe('MoneyMask', () => {
  const mask = new MoneyMask()

  it('formats standard input', () => {
    expect(mask.format('123')).toBe('R$ 1,23')
    expect(mask.format('123456')).toBe('R$ 1.234,56')
  })

  it('formats negatives correctly', () => {
    expect(mask.format('-123456')).toBe('R$ -1.234,56')
  })

  it('pads zero if needed', () => {
    expect(mask.format('1')).toBe('R$ 0,01')
    expect(mask.format('')).toBe('')
  })

  it('ignores invalid characters', () => {
    expect(mask.format('abc123.45')).toBe('R$ 123,45')
  })

  it('respects custom prefix', () => {
    const custom = new MoneyMask({ prefix: '$' })
    expect(custom.format('123456')).toBe('$ 1.234,56')
  })
})
