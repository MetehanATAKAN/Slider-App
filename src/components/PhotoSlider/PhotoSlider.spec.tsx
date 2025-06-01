import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import PhotoSlider from "./index";
import type { Photo } from "../../types/photo";

const mockData: Photo[] = [
  {
    id: "1",
    author: "John Doe",
    download_url: "https://example.com/image1.jpg",
    height: 800,
    width: 1200,
    url: "https://example.com/photo1",
  },
  {
    id: "2",
    author: "Jane Smith",
    download_url: "https://example.com/image2.jpg",
    height: 800,
    width: 1200,
    url: "https://example.com/photo2",
  },
];

describe("PhotoSlider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders in manual mode by default", () => {
    render(<PhotoSlider data={mockData} />);

    expect(screen.getByLabelText("Manual")).toBeChecked();
    expect(screen.getByAltText("current")).toHaveAttribute(
      "src",
      mockData[0].download_url
    );

    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /forward/i })
    ).toBeInTheDocument();
  });

  it("changes slide on right arrow click", () => {
    render(<PhotoSlider data={mockData} />);

    const nextButton = screen.getByRole("button", { name: /forward/i });
    fireEvent.click(nextButton);

    act(() => {
      vi.advanceTimersByTime(800);
    });

    expect(screen.getByAltText("current")).toHaveAttribute(
      "src",
      mockData[1].download_url
    );
  });

  it("changes slide on left arrow click with wrap-around", () => {
    render(<PhotoSlider data={mockData} />);

    const prevButton = screen.getByRole("button", { name: /back/i });
    fireEvent.click(prevButton);

    act(() => {
      vi.advanceTimersByTime(800);
    });

    expect(screen.getByAltText("current")).toHaveAttribute(
      "src",
      mockData[1].download_url
    );
  });

  it("switches to auto mode and slides automatically", () => {
    render(<PhotoSlider data={mockData} />);

    const autoMode = screen.getByLabelText("Auto");
    fireEvent.click(autoMode);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    act(() => {
      vi.advanceTimersByTime(800);
    });

    expect(screen.getByAltText("current")).toHaveAttribute(
      "src",
      mockData[1].download_url
    );
  });

  it("displays next image during animation phase", () => {
    render(<PhotoSlider data={mockData} />);

    const nextButton = screen.getByRole("button", { name: /forward/i });
    fireEvent.click(nextButton);

    const nextImage = screen.getByAltText("next");
    expect(nextImage).toHaveAttribute("src", mockData[1].download_url);
  });
});
