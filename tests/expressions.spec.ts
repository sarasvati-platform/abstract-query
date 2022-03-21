import { eq, neq, gt, lt, gte, lte, and, or, not, incl } from '@src/index'

describe('Expression', () => {
  describe('eq', () => {
    it('should return an expression with operator', () => {
      const expression = eq('field', 'value')
      expect(expression.toString()).toBe('field = value')
    })

    it('should return an expression with options', () => {
      const expression = eq('field', 'value', ['i'])
      expect(expression.toString()).toBe('field = value')
    })
  })

  describe('neq', () => {
    it('should return an expression with operator', () => {
      const expression = neq('field', 'value')
      expect(expression.toString()).toBe('field != value')
    })
  })

  describe('gt', () => {
    it('should return an expression with operator', () => {
      const expression = gt('field', 'value')
      expect(expression.toString()).toBe('field > value')
    })
  })

  describe('lt', () => {
    it('should return an expression with operator', () => {
      const expression = lt('field', 'value')
      expect(expression.toString()).toBe('field < value')
    })
  })

  describe('gte', () => {
    it('should return an expression with operator', () => {
      const expression = gte('field', 'value')
      expect(expression.toString()).toBe('field >= value')
    })
  })

  describe('lte', () => {
    it('should return an expression with operator', () => {
      const expression = lte('field', 'value')
      expect(expression.toString()).toBe('field <= value')
    })
  })

  describe('and', () => {
    it('should return an expression with operator', () => {
      const expression = and(eq('field', 'value'), neq('field', 'value'))
      expect(expression.toString()).toBe('(field = value and field != value)')
    })
  })

  describe('or', () => {
    it('should return an expression with operator', () => {
      const expression = or(eq('field', 'value'), neq('field', 'value'))
      expect(expression.toString()).toBe('(field = value or field != value)')
    })

    it('should combine other predicates', () => {
      const expression = or(
        and(eq('field', 'value'),  eq('field1', 'value1')),
        and(neq('field', 'value'), eq('field2', 'value2'))
      )
      expect(expression.toString()).toBe('((field = value and field1 = value1) or (field != value and field2 = value2))')
    })
  })

  describe('not', () => {
    it('should return an expression with operator', () => {
      const expression = not(eq('field', 'value'))
      expect(expression.toString()).toBe('not (field = value)')
    })
  })

  describe('incl', () => {
    it('should return an expression with operator', () => {
      const expression = incl('field', 'value')
      expect(expression.toString()).toBe('field in value')
    })
  })
})