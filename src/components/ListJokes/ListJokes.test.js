/* eslint-disable no-undef */
import React from "react";
import { render, findByTestId } from "@testing-library/react";
import Store from "../../store";
import List from ".";

describe("InputNameMain Component", () => {
  test("Deve conter uma piada no mínimo uma piada", () => {
    render(
      <Store>
        <List />
      </Store>
    );

    // const cardJoke = screen.findAllByTestId("jokeId");
    expect(findByTestId("jokeId")).toBeTruthy();
  });
});
