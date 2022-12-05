import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./menu-component";
import { act } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});

test.skip("should render gallery component", () => {
  render(<Menu />);
  const previousImageButton = screen.getByRole("button", {
    name: "go to previous image",
  });
  const nextImageButton = screen.getByRole("button", {
    name: "go to next image",
  });
  expect(previousImageButton).toBeInTheDocument();
  expect(nextImageButton).toBeInTheDocument();
});
