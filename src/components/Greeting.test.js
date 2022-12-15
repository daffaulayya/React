import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import { text } from "body-parser";

/**
 * 1. get: dia akan throw error kalau tidak ketemu
 * 2. query: dia akan return kalau tidak ketemu
 * 3. find: dia akan return promise
 */

describe("Greeting Component", () => {
  test("renders Hello World! as a text", () => {
    //1. Arrange: test set up
    render(<Greeting />);
    //2. Act: test logic
    //3. Assert: test compare execution result dengan expected output
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});

test("renders It's good to see you as a text before button clicked", () => {
  //1. Arrange: test set up
  render(<Greeting />);
  //2. Act: test logic
  //3. Assert: test compare execution result dengan expected output
  const helloWorldElement = screen.getByText("It's good to see you");
  expect(helloWorldElement).toBeInTheDocument();
});

test("renders It's good to see you as a text after button clicked", () => {
  //1. Arrange: test set up
  render(<Greeting />);
  //2. Act: test logic
  //3. Assert: test compare execution result dengan expected output
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  const textElement = screen.getByText("Changed!");
  expect(textElement).toBeInTheDocument();
});

text(
  "does not render It's good to see you as a text after button clicked",
  () => {
    //1. arrange
    render(<Greeting />);

    //2. act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //3.Assert
    const textElement = screen.queryByText("It's good to see you");
    expect(textElement).toBeNull();
  }
);
