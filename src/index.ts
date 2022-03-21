/* -------------------------------------------------------------------------- */
/*                             Logical expressions                            */
/* -------------------------------------------------------------------------- */

export const and = (...expressions: Expression[]) => new Operator('and', ...expressions)
export const or  = (...expressions: Expression[]) => new Operator('or',  ...expressions)
export const not = (expression: Expression) => new Operator('not', expression)

/* -------------------------------------------------------------------------- */
/*                           Comparison expressions                           */
/* -------------------------------------------------------------------------- */

export const eq   = (field, value) => new Expression(field, '=', value)
export const neq  = (field, value) => new Expression(field, '!=', value)
export const gt   = (field, value) => new Expression(field, '>', value)
export const lt   = (field, value) => new Expression(field, '<', value)
export const gte  = (field, value) => new Expression(field, '>=', value)
export const lte  = (field, value) => new Expression(field, '<=', value)
export const incl = (field, value) => new Expression(field, 'in', value)

/* -------------------------------------------------------------------------- */
/*                               Implementation                               */
/* -------------------------------------------------------------------------- */

export class Expression {
  constructor(
    public readonly field: string,
    public readonly operator: string,
    public readonly value: string,
    public readonly options: string[] = [])
  { }

  toString() {
    return `${this.field} ${this.operator} ${this.value}`
  }
}

export class Operator {
  public expressions: Expression[]
  public operator: string
  constructor(
    operator: string,
    ...expressions: Expression[]
  ) {
    this.operator = operator
    this.expressions = expressions
  }

  toString() {
    if (this.operator === 'not') {
      return `${this.operator} (${this.expressions[0].toString()})`
    }

    const str = this.expressions
      .map(e => e.toString())
      .join(` ${this.operator} `)
    return `(${str})`
  }
}
