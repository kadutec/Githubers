import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/Fala/i);
  expect(linkElement).toBeInTheDocument();
});
