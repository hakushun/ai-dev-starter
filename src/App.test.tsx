import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders Vite + React heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Vite + React" })).toBeInTheDocument();
  });

  it("increments count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /count is 0/i });
    await user.click(buttons[0]!);
    expect(screen.getByRole("button", { name: /count is 1/i })).toBeInTheDocument();
  });
});
