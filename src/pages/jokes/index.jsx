// ANCHOR Imports
import React from "react";
import { Container } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/ChatBubble";
import ListJokes from "../../components/ListJokes";
import { useStyles } from "./styled";

// ANCHOR Page
export default function Jokes() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <h1 className={classes.title}>
          <BookmarkIcon className={classes.icon} />
          Piadas
        </h1>
        <ListJokes listNum={25} />
      </Container>
    </>
  );
}
