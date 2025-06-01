import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotFound from "./index";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("NotFound Page", () => {
  it("renders 404 page with correct content", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for doesn’t exist/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Back to Home Page/i })
    ).toBeInTheDocument();
  });

  it('calls navigate("/") when button is clicked', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /Back to Home Page/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
