function succ(n: number): number {
  return n + 1;
}

function prev(n: number): number {
  return n - 1;
}

export default function add(x: number, y: number): number {
  if (y <= 0) {
    return x;
  }

  return add(succ(x), prev(y));
}
