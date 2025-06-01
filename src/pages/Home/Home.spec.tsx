import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./index";
import * as usePhotosHook from "../../hooks/usePhotos";

vi.mock("../../components/PhotoSlider", () => ({
  default: () => <div data-testid="photo-slider-mock">Mocked PhotoSlider</div>,
}));

vi.mock("../../components/LoadingOutlet", () => ({
  default: ({
    loading,
    children,
  }: {
    loading: boolean;
    children: React.ReactNode;
  }) =>
    loading ? <div data-testid="loader">Loading...</div> : <>{children}</>,
}));

describe("Home", () => {
  it("shows loading state when loading", () => {
    vi.spyOn(usePhotosHook, "usePhotos").mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    render(<Home />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.queryByTestId("photo-slider-mock")).not.toBeInTheDocument();
  });

  it("shows photo slider when data is loaded", () => {
    vi.spyOn(usePhotosHook, "usePhotos").mockReturnValue({
      data: [
        {
          id: "1",
          author: "a",
          download_url: "",
          height: 100,
          width: 100,
          url: "",
        },
      ],
      isLoading: false,
    });

    render(<Home />);

    expect(screen.getByText("Photo Slider App")).toBeInTheDocument();
    expect(screen.getByTestId("photo-slider-mock")).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});
