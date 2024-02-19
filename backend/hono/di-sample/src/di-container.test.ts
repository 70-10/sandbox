import { beforeEach, describe, expect, it } from "bun:test";
import { DIContainer } from "../src/di-container";

class Foo {
  name: string;
  constructor() {
    this.name = "Foo";
  }
}

class Bar {
  value: number;
  constructor() {
    this.value = 42;
  }
}

describe("DIContainer", () => {
  it("should register and retrieve dependencies", () => {
    // Arrange
    const container = new DIContainer<{ foo: Foo; bar: Bar }>();
    // Act
    container.register("foo", Foo);
    container.register("bar", Bar);

    // Assert
    expect(container.get("foo")).toBeInstanceOf(Foo);
    expect(container.get("foo").name).toBe("Foo");

    expect(container.get("bar")).toBeInstanceOf(Bar);
    expect(container.get("bar").value).toBe(42);
  });

  it("should throw an error when retrieving a non-existent dependency", () => {
    // Arrange
    const container = new DIContainer<{ foo: Foo; bar: Bar }>();

    // Act and Assert
    expect(() => container.get("foo")).toThrow(
      "No instance found for key: foo",
    );
  });
});
