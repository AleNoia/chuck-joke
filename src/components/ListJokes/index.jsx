// ANCHOR Imports
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useApi from "../../hooks/useApi";
import CardJoke from "../CardJoke";
import { useStyles } from "./styled";

// ANCHOR Component
export default function ListJokes(props) {
  const { listNum } = props;
  const classes = useStyles();
  const [response, setResponse] = useState([]);
  const res = useApi(listNum); // Fazendo requisição de 25 piadas

  useEffect(() => {
    if (!res.loading) {
      setResponse(res.data);
    }
    return false;
  }, [res]);

  // console.log(response);

  // Component
  return (
    <ul className={classes.root}>
      {!res.loading
        ? response.map((joke) => (
            <li key={joke.id}>
              <CardJoke joke={joke} />
            </li>
          ))
        : false}
    </ul>
  );
}

ListJokes.propTypes = {
  listNum: PropTypes.number,
};

ListJokes.defaultProps = {
  listNum: 1,
};
