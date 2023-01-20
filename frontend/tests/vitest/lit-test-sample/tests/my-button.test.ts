import { beforeEach, describe, expect, it } from "vitest";
import "../src/my-button";
import { waitShadowElement } from "./utils";

describe("Button", () => {
  beforeEach(async () => {
    document.body.innerHTML = "<my-button name='Test World' />";
    await waitShadowElement("my-button");
  });

  it("should show name props", async () => {
    const button = document.body.querySelector("my-button").shadowRoot;
    const h1 = button.querySelector("h1");

    expect(h1.textContent).toBe("Hello, Test World!");
  });
});
