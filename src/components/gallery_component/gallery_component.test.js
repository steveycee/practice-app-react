import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import GalleryComponent from "./gallery_component";
import { act } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});

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

test("should move between images", () => {
  render(<GalleryComponent />);
  const previousImageButton = screen.getByRole("button", {
    name: "go to previous image",
  });
  const nextImageButton = screen.getByRole("button", {
    name: "go to next image",
  });
  const image = screen.getAllByTitle("slide")[0];
  expect(image).toHaveStyle({ transform: "translateX(0%)" });
  act(() => {
    nextImageButton.click();
  });
  expect(image).toHaveStyle({ transform: "translateX(-100%)" });
  act(() => {
    previousImageButton.click();
  });
  expect(image).toHaveStyle({ transform: "translateX(0%)" });
});

test.skip("out of view images should not be visible.", () => {
  render(<GalleryComponent />);
  //   const previousImageButton = screen.getByRole("button", {
  //     name: "go to previous image",
  //   });
  //   const nextImageButton = screen.getByRole("button", {
  //     name: "go to next image",
  //   });
  const nextImage = screen.getAllByRole("img")[1];
  expect(nextImage).not.toBeVisible();
});
