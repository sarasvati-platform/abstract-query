interface IExpression {}

/* -------------------------------------------------------------------------- */
/*                             Logical expressions                            */
/* -------------------------------------------------------------------------- */

export const and = (...expressions: IExpression[]) => new Operator('and', ...expressions)
export const or  = (...expressions: IExpression[]) => new Operator('or',  ...expressions)
export const not = (expression: IExpression) => new Operator('not', expression)

/* -------------------------------------------------------------------------- */
/*                           Comparison expressions                           */
/* -------------------------------------------------------------------------- */

export const eq  = (field, value) => new Expression(field, '=', value)
export const neq = (field, value) => new Expression(field, '!=', value)
export const gt  = (field, value) => new Expression(field, '>', value)
export const lt  = (field, value) => new Expression(field, '<', value)
export const gte = (field, value) => new Expression(field, '>=', value)
export const lte = (field, value) => new Expression(field, '<=', value)

/* -------------------------------------------------------------------------- */
/*                               Implementation                               */
/* -------------------------------------------------------------------------- */

export class Expression implements IExpression {
  constructor(
    public readonly field: string,
    public readonly operator: string,
    public readonly value: string)
  { }
}

export class Operator implements IExpression {
  public expressions: IExpression[]
  public operator: string
  constructor(
    operator: string,
    ...expressions:IExpression[]
  ) {
    this.operator = operator
    this.expressions = expressions
  }
}
