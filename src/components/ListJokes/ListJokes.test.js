/* eslint-disable no-undef */
import React from "react";
import { render, findByTestId } from "@testing-library/react";
import Store from "../../store";
import List from ".";

describe("ListJokes Component", () => {
  test("Deve conter uma piada no mínimo uma piada", () => {
    render(
      <Store>
        <List />
      </Store>
    );

    expect(findByTestId("jokeId")).toBeTruthy();
  });
});
