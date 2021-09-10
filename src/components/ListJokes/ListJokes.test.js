/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import List from ".";

describe("InputNameMain Component", () => {
  test("Deve conter uma piada", () => {
    render(<List />);

    expect(findAllByTestId("joke")).toHaveLength(1);
  });
});
