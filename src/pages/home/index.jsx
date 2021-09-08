// ANCHOR Imports
import React from "react";
import { Container } from "@material-ui/core";
import { AppContext } from "../../store";
import InputNameMain from "../../components/InputNameMain";
import CardJoke from "../../components/CardJoke";
// import {} from "./styled";

// ANCHOR Page
export default function Home() {
  const {
    state: { firstName, lastName },
  } = React.useContext(AppContext);

  return (
    <Container maxWidth="lg">
      <h1>Home</h1>
      <p>Name: {`${firstName} ${lastName}`} </p>
      <InputNameMain />
      <CardJoke />
    </Container>
  );
}
