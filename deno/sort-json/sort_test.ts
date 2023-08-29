import { assertEquals } from "https://deno.land/std@0.200.0/testing/asserts.ts";
import { sortObjectByKey } from "./sort.ts";

Deno.test("sortObjectByKey sorts simple objects", () => {
  const input = { c: 3, a: 1, b: 2 };
  const expected = { a: 1, b: 2, c: 3 };
  const output = sortObjectByKey(input);
  assertEquals(output, expected);
});

Deno.test("sortObjectByKey sorts nested objects", () => {
  const input = {
    b: { c: 3, a: 1 },
    a: 1,
  };
  const expected = {
    a: 1,
    b: { a: 1, c: 3 },
  };
  const output = sortObjectByKey(input);
  assertEquals(output, expected);
});
