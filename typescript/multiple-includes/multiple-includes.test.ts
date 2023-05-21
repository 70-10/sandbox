import { test, expect } from "vitest";
import multipleIncludes from "./multiple-includes";

test("single word - include", () => {
  expect(multipleIncludes("Hello, World", "World")).toBeTruthy();
});

test("single word - not include", () => {
  expect(multipleIncludes("Hello, World", "Nothing word")).toBeFalsy();
});

test("multiple word (or) - include", () => {
  expect(
    multipleIncludes("Hello, World", ["Hello", "Nothing word"])
  ).toBeTruthy();
});

test("single word (or) - not include", () => {
  expect(multipleIncludes("Hello, World", ["Nothing word", "hey"])).toBeFalsy();
});

test("multiple word (and) - include", () => {
  expect(
    multipleIncludes("Hello, World", ["Hello", "World"], "and")
  ).toBeTruthy();
});

test("single word (and) - not include", () => {
  expect(
    multipleIncludes("Hello, World", ["Nothing word", "Hello"], "and")
  ).toBeFalsy();
});
