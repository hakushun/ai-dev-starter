import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore, Provider } from "jotai";
import { Counter } from "./Counter";

function renderCounter() {
  const store = createStore();
  const result = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  return { ...result, store, ...within(result.container) };
}

describe("Counter", () => {
  it("renders initial count of 0", () => {
    renderCounter();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments when + is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = renderCounter();
    await user.click(getByRole("button", { name: "+" }));
    expect(getByText("1")).toBeInTheDocument();
  });

  it("decrements when − is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = renderCounter();
    await user.click(getByRole("button", { name: "−" }));
    expect(getByText("-1")).toBeInTheDocument();
  });
});
