import { render, screen } from "@testing-library/react";
import  ButtonPattern  from "@ui/button/ButtonPattern";
import "@testing-library/jest-dom";
import React from "react";

describe("ButtonPattern (StyledButton)", () => {
  it("renders children", () => {
    render(<ButtonPattern>Click me</ButtonPattern>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});