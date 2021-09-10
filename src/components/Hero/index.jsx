// ANCHOR Imports
import { useEffect, useState, useContext } from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import useApi from "../../hooks/useApi";
import InputNameMain from "../InputNameMain";
import { useStyles } from "./styled";
import { AppContext } from "../../store";

// ANCHOR Component
export default function Hero() {
  const {
    state: { firstName, lastName },
  } = useContext(AppContext);
  const classes = useStyles();
  const [response, setResponse] = useState({});
  const res = useApi(); // Fazendo requisição de 1 piada aleatória

  // Substituindo &quot por caractere espeical
  function replaceSpecialCharacter(jokeReturn) {
    if (jokeReturn) {
      return jokeReturn.replace(/&quot;/g, '"');
    }
    return "A piada ainda não chegou";
  }

  useEffect(() => {
    if (res !== undefined) {
      if (!res.loading) {
        setResponse(res.data);
      }
    }
  }, [res]);

  // Component
  return (
    <section className={classes.sectionHero}>
      <Container>
        <div className={classes.containerHero}>
          <Paper elevation={3} className={classes.cardHeroFirst}>
            <Typography variant="h5" color="textSecondary">
              Olá, sou o {`${firstName} ${lastName}`} 😎
            </Typography>
          </Paper>

          <Paper elevation={3} className={classes.cardHeroSecondary}>
            <Typography variant="h4" color="textSecondary">
              {!res.loading
                ? replaceSpecialCharacter(response.joke)
                : "A piada ainda não chegou"}
            </Typography>
          </Paper>
        </div>

        <div className={classes.containerInput}>
          <InputNameMain />
        </div>
      </Container>
    </section>
  );
}
