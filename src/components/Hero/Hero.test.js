/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Store from "../../store";
import Hero from ".";

describe("Hero Component", () => {
  test("Deve apresentar o nome do personagem escolhido pelo usuario", async () => {
    render(
      <Store>
        <Hero />
      </Store>
    );

    const name = "Usuario";
    const textExpect = `Olá, sou o ${name}`;
    const input = screen.getByPlaceholderText(/Seu nome/i);
    const buttonInputId = screen.getByTestId("buttonInputId");

    userEvent.type(input, name);
    userEvent.click(buttonInputId);

    await waitFor(() => {
      expect(screen.findByText(textExpect)).toBeTruthy();
    });
  });
});
