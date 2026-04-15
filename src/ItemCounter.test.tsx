import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ItemCounter from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    // This test will check if the component renders correctly with the provided props, and if the buttons and text are displayed as expected. This followings structure is called "Test Props Factory / Mock Props"
    const mockProps = {
      productName: "Test item",
      quantity: 5,
      onIncrement: () => {},
      onDecrement: () => {},
    };

    render(<ItemCounter {...mockProps} />);
    //screen.debug();

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByText("Test item")).toBeDefined();
    expect(screen.getByText("5")).not.toBeNull();
  });

  test("should increment and decrement the counter", async () => {
    const mockProps = {
      productName: "Test item",
      quantity: 5,
      onIncrement: () => {},
      onDecrement: () => {},
    };

    const user = userEvent.setup();

    render(<ItemCounter {...mockProps} />);
    const button = screen.getByRole("button", { name: "+1" });

    await user.click(button);

    expect(screen.getByText("6")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "-1" }));
    expect(screen.getByText("5")).toBeInTheDocument();

    // Alternative way to do testing by clicking the buttons using fireEvent. This helps to test the functionality of the buttons without using userEvent, which is more focused on simulating user interactions.

    const [buttonAdd, buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonAdd);
    expect(screen.getByText("6")).toBeInTheDocument();
    fireEvent.click(buttonSubtract);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("should not decrement below 1", async () => {
    const mockProps = {
      productName: "Test item",
      quantity: 1,
      onIncrement: () => {},
      onDecrement: () => {},
    };

    render(<ItemCounter {...mockProps} />);
    const button = screen.getByRole("button", { name: "-1" });

    fireEvent.click(button);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
