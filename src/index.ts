interface IExpression {}


class Expression implements IExpression {
  and(...expressions: Expression[]): Expression {
    return new AndExpression(this, ...expressions)
  }
  or(...expressions: Expression[]): Expression {
    return new OrExpression(this, ...expressions)
  }
}

class EqualExpression extends Expression {
  constructor(
    public readonly field: string,
    public readonly value: string)
  {
    super()
  }
}

class GteExpression extends Expression {
  constructor(
    public readonly field: string,
    public readonly value: string)
  {
    super()
  }
}


class AndExpression extends Expression {
  public expressions: Expression[]
  constructor(
    ...expressions:Expression[]
  ) { super(); this.expressions = expressions }
}


class OrExpression extends Expression {
  public expressions: Expression[]
  constructor(
    ...expressions:Expression[]
  ) { super(); this.expressions = expressions }
}

function hasCar() {
  return new EqualExpression('has.car', 'true')
}

function isNerdOrOld(age=18): Expression {
  return new OrExpression(
    new EqualExpression('nerd', 'true'),
    new GteExpression('age', '' + age)
  )
}

function isIvan(): Expression {
  return new EqualExpression('name', 'ivan')
}

const expression = isIvan().and(isNerdOrOld(35).or(hasCar()))


// new OrExpression([
//   new AndExpression([
//     new EqualExpression('name', 'ivan'),
//     new EqualExpression('surname', 'ivanov'),
//     new OrExpression([
//       new EqualExpression('age', '23'),
//       new EqualExpression('height', '110'),
//       new EqualExpression('nerd', 'true')
//     ])
//   ]),
//   new EqualExpression('true', 'false')
// ])

const formatter = {
  and(exp: AndExpression) { return '(' + exp.expressions.map(e=>this.format(e)).join(' AND ') + ')' },
  or(exp: OrExpression)   { return '(' + exp.expressions.map(e=>this.format(e)).join(' OR ') + ')' },
  exp(exp: EqualExpression) { return exp.field + ' = ' + exp.value },
  gte(exp: EqualExpression) { return exp.field + ' > ' + exp.value },
  format(exp: IExpression) {
    if (exp instanceof EqualExpression) {
      return formatter.exp(exp)
    } else if (exp instanceof GteExpression) {
      return formatter.gte(exp)
    } else if (exp instanceof AndExpression) {
      return formatter.and(exp)
    } else if (exp instanceof OrExpression) {
      return formatter.or(exp)
    }
  }
}

const result = formatter.format(expression)
console.log(result)

