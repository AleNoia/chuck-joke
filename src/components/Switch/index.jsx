// ANCHOR Imports
import { useState, useContext, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import { AppContext } from "../../store";
import { changeSwitch, changeName } from "../../store/actions";
import UseBreakName from "../../hooks/usebreakName";
import Snackbar from "../Snackbar";
// import {} from "./styled";

// ANCHOR Component
export default function SwitchButton() {
  const [state, setState] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { dispatch } = useContext(AppContext);

  // Trocando o valor do switch
  const handleChange = () => {
    setState(!state);
  };

  useEffect(() => {
    if (state) {
      setOpenSnackbar(true);
    }
  }, [state]);

  // Disparando ações de acordo com o valor do switch
  useEffect(() => {
    if (!state) {
      changeSwitch(dispatch, 0);
    } else {
      setOpenSnackbar(true);
      changeName(dispatch, UseBreakName("Chuck Norris"));
      changeSwitch(dispatch, 3);
    }
  }, [state, dispatch]);

  // Component
  return (
    <>
      <Snackbar openSnackbar={openSnackbar} />
      <Switch checked={state} onChange={() => handleChange()} />
    </>
  );
}
