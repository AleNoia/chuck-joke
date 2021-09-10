// ANCHOR Imports
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./styled";

// ANCHOR Component
export default function CardJoke(props) {
  const classes = useStyles();
  const { joke } = props;

  // Substituindo &quot por caractere espeical
  function replaceSpecialCharacter(jokeReturn) {
    return jokeReturn.replace(/&quot;/g, '"');
  }

  // Component
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          #{joke.id}
        </Typography>
        <Typography variant="h5" component="h3" color="textSecondary">
          {replaceSpecialCharacter(joke.joke)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {joke.categories[0] ? joke.categories : "Sem categoria"}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardJoke.propTypes = {
  joke: PropTypes.shape({
    id: PropTypes.number,
    joke: PropTypes.string,
    categories: PropTypes.instanceOf(Array),
  }),
};

CardJoke.defaultProps = {
  joke: {},
};
