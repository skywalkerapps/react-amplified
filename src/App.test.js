import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders amplify to do list", () => {
  render(<App />);
  const linkElement = screen.getByText(/Amplify/i);
  expect(linkElement).toBeInTheDocument();
});
