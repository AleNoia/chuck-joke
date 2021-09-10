// ANCHOR Imports
import React from "react";
import { Container } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CodeIcon from "@material-ui/icons/Code";
import { useStyles } from "./styled";

// ANCHOR Page
export default function MyJokes() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <h1 className={classes.title}>
          <BookmarkIcon className={classes.icon} />
          Minhas piadas
        </h1>
        <h2 className={classes.title}>
          <CodeIcon className={classes.icon} />
          Em desenvolvimento
        </h2>
      </Container>
    </>
  );
}
