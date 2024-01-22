import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import Button from "./Button";

test("Visible Button text", async () => {
    render(<Button>Button</Button>);

    expect(screen.getByText("Button")).toBeTruthy();
})

test("Role is button", async () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole("button").textContent).toBe("Button");
});

test("Execute onClick() when clicked", async () => {
    // Arrange
    const onClickMock = vi.fn(() => { });

    render(<Button onClick={onClickMock}>Button</Button>);

    // Act
    const button = screen.getByRole("button");
    await fireEvent.click(button);


    // Assert
    expect(onClickMock).toHaveBeenCalledTimes(1);
    await fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(2);
});

test("Background color is white", async () => {
    render(<Button>Button</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveStyle("background-color: rgb(255, 255, 255)");
})

test("Can not click when disabled", async () => {
    // Arrange
    const onClickMock = vi.fn(() => { });

    render(<Button disabled onClick={onClickMock}>Button</Button>);

    // Act
    const button = screen.getByRole("button");
    await fireEvent.click(button);

    // Assert
    expect(onClickMock).toHaveBeenCalledTimes(0);

})