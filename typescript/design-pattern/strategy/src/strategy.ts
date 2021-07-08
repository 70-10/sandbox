export enum CalcTypes {
  Sum,
  Subtraction,
}

interface CalcStrategy {
  execute(a: number, b: number): number;
}

class SumCalc implements CalcStrategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class SubtractionCalc implements CalcStrategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class CalcStrategyFactory {
  private static strategies = {
    [CalcTypes.Sum]: new SumCalc(),
    [CalcTypes.Subtraction]: new SubtractionCalc(),
  };

  static getCalcStrategy(type: CalcTypes): CalcStrategy {
    return CalcStrategyFactory.strategies[type];
  }
}
