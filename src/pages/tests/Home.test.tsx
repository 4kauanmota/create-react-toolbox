import { render, screen } from "@testing-library/react";

import Home from "../Home";

describe("Home", () => {
  test("Should render correctly", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
