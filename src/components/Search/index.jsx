// ANCHOR Imports
// import PropTypes from "prop-types";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState, useEffect } from "react";
import { useStyles } from "./styled";
import UseApi from "../../hooks/useApi";
import DialogComponent from "../Dialog";
// import { AppContext } from "../../store";

// ANCHOR Component
export default function Search() {
  const classes = useStyles();

  const [id, setId] = useState();
  const [search, setSearch] = useState();
  const [joke, setJoke] = useState();
  const [open, setOpenDialog] = useState(false);

  const res = UseApi(false, id);

  // Quando for submetido uma pesquisa, ele irá abrir o modal
  function handleSearch(e) {
    e.preventDefault();
    setSearch(!search);
    setOpenDialog(true);
  }

  useEffect(() => {
    setJoke(res);
    // console.log(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Component
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <form method="get">
          <InputBase
            placeholder="Pesquise pelo ID"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="submit"
            className={classes.inputSubmit}
            aria-label="button"
            onClick={(e) => {
              handleSearch(e);
            }}
          />
        </form>
      </div>
      {/* <DialogComponent joke={!joke.loading ? joke : false} openDialog={open} /> */}
      <DialogComponent joke={joke} openDialog={open} />
    </>
  );
}
