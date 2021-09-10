// ANCHOR Imports
import React, { useState, useContext } from "react";
// import TextField from "@material-ui/core/TextField";
import { AppContext } from "../../store";
import { changeName } from "../../store/actions";
import UseBreakName from "../../hooks/usebreakName";
import { useStyles } from "./styled";

// ANCHOR Component
export default function InputNameMain() {
  const classes = useStyles();
  const {
    state: { firstName, lastName },
    dispatch,
  } = useContext(AppContext);
  const [name, setName] = useState(`${firstName} ${lastName}`);

  // Verficando se o campo está vazio
  function handleSetName(e) {
    e.preventDefault();
    if (name === " " || name === "") {
      changeName(dispatch, UseBreakName("Chuck Norris"));
    } else {
      changeName(dispatch, UseBreakName(name.trim()));
    }
  }

  // Component
  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      data-testid="formId"
    >
      <input
        className={classes.input}
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
        data-testid="inputId"
      />
      <button
        type="submit"
        data-testid="buttonInputId"
        className={classes.button}
        onClick={(e) => {
          handleSetName(e);
        }}
      >
        enviar
      </button>
    </form>
  );
}
