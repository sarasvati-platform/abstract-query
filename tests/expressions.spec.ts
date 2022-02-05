import { eq, neq, gt, lt, gte, lte, and, or, not } from '@src/index'

describe('Expression', () => {
  describe('eq', () => {
    it('should return an expression with operator', () => {
      const expression = eq('field', 'value')
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
  })

  describe('not', () => {
    it('should return an expression with operator', () => {
      const expression = not(eq('field', 'value'))
      expect(expression.toString()).toBe('not (field = value)')
    })
  })
})