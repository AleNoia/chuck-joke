import React from "react";
import PropTypes from "prop-types";
import reducer from "./reducers";

const initialState = {
  firstName: "Chuck",
  lastName: "Norris",
  jokeCategory: 0,
  JokesSaved: {
    jokesLiked: {},
    jokesUser: {},
  },
};

export const AppContext = React.createContext();

export default function Store({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
