import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import GalleryComponent from "./gallery_component";

test("should render gallery component", () => {
  render(<GalleryComponent />);
  const previousImageButton = screen.getByRole("button", {
    name: "go to previous image",
  });
  const nextImageButton = screen.getByRole("button", {
    name: "go to next image",
  });
  expect(previousImageButton).toBeInTheDocument();
  expect(nextImageButton).toBeInTheDocument();
});
