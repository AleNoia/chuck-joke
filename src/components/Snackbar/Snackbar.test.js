import { render, screen } from "@testing-library/react";
import CardJoke from ".";

describe("CardJoke Component", () => {
  test("Não deve conter no card o caracter unicode &quot", () => {
    render(<CardJoke />);

    const caracter = screen.findByText("&quot");
    expect(caracter).not.toBeInTheDocument();
  });
});
