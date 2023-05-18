import operate from './operate'

describe('operate', () => {
  test('addition', () => {
    const result = operate('5', '3', '+')
    expect(result).toBe('8')
  })

  test('resta', () => {
    const result = operate('5', '3', '-')
    expect(result).toBe('2')
  })

  test('multiplicacion', () => {
    const result = operate('5', '3', 'x')
    expect(result).toBe('15')
  })

  test('division', () => {
    const result = operate('10', '2', '÷')
    expect(result).toBe('5')
  })

  test('division by zero', () => {
    expect(() => operate('10', '0', '÷')).toThrowError('[big.js] Division by zero')
  })

  test('modulus', () => {
    const result = operate('10', '3', '%')
    expect(result).toBe('1')
  })
})
