// ANCHOR Imports
import { useState, useContext, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import { AppContext } from "../../store";
import { changeSwitch } from "../../store/actions";
// import {} from "./styled";

// ANCHOR Component
export default function SwitchButton() {
  const [state, setState] = useState(false);
  const { dispatch } = useContext(AppContext);

  const handleChange = () => {
    setState(!state);
  };

  useEffect(() => {
    if (state === false) {
      changeSwitch(dispatch, 0);
    } else {
      changeSwitch(dispatch, 3);
    }
  }, [state, dispatch]);

  // Component
  return <Switch checked={state} onChange={() => handleChange()} />;
}
