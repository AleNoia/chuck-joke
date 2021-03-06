// ANCHOR Imports
import React from "react";
import { Container } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ListJokes from "../../components/ListJokes";
import Hero from "../../components/Hero";
import { useStyles } from "./styled";

// ANCHOR Page
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <h1 className={classes.title}>
          <ChatBubbleIcon className={classes.icon} />
          Lista de piadas
        </h1>
        <ListJokes listNum={25} />
      </Container>
    </>
  );
}
