import { render, screen } from "@testing-library/react";
import { Button } from "react-bootstrap";

test("renders bootstrap components", () => {
  render(<Button>Button Text</Button>);
  const nameElement = screen.getByText(/Button Text/i);
  expect(nameElement).toBeInTheDocument();
});
