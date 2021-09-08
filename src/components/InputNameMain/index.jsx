// ANCHOR Imports
import { useState, useContext } from "react";
import { AppContext } from "../../store";
import { changeName } from "../../store/actions";
// import {} from "./styled";

// ANCHOR Component
export default function InputNameMain() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(AppContext);

  function breakName(nameCharacter) {
    const arrayName = nameCharacter.split(" ");
    const [firstName, ...lastName] = arrayName;
    const newLastName = `${lastName.join(" ")}`;
    const newName = { firstName, newLastName };
    return newName;
  }

  // Verficando se o campo está vazio
  function handleSetName(e) {
    e.preventDefault();
    if (name === " " || name === "") {
      changeName(dispatch, breakName("Chuck Norris"));
    } else {
      changeName(dispatch, breakName(name.trim()));
    }
  }

  // Component
  return (
    <form>
      <h1>Input name main</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        type="submit"
        onClick={(e) => {
          handleSetName(e);
        }}
      >
        enviar
      </button>
    </form>
  );
}
