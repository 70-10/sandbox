import type { IWindow } from "happy-dom";
import { describe, expect, it } from "vitest";

import "../src/my-button";

declare global {
  interface Window extends IWindow {}
}

describe("Button", () => {
  it("should show name props", async () => {
    document.body.innerHTML = "<my-button name='Test World' />";
    await window.happyDOM.whenAsyncComplete();

    const button = document.body.querySelector("my-button").shadowRoot;
    const h1 = button.querySelector("h1");

    expect(h1.textContent).toBe("Hello, Test World!");
  });
});
