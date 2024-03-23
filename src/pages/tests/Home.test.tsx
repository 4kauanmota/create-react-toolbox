import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "../Home";

describe("Home", () => {
  test("Should render correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
