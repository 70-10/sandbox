import * as numeral from "numeral";

export function humanizeDollar(num: number) {
  return numeral(num).format("$0,0.00");
}

export function flatten(ary: any) {
  return ary.reduce(
    (p: any, c: any) => (Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c)),
    []
  );
}
