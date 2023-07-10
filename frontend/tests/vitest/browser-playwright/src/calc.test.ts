import { expect, test } from "vitest";
import { add } from "./calc";

test("add(1, 2, 3) = 6", () => {
    expect(add(1, 2, 3)).toBe(6)
})
