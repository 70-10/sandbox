import { CalcStrategyFactory, CalcTypes } from "./strategy";

async function main() {
  const calc = CalcStrategyFactory.getCalcStrategy(CalcTypes.Sum);
  console.log(calc.execute(10, 5));

  const calc2 = CalcStrategyFactory.getCalcStrategy(CalcTypes.Subtraction);
  console.log(calc2.execute(10, 5));
}

main().catch(console.error);
