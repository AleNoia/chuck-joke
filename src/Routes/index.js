import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/about";
import Home from "../pages/home";
import Jokes from "../pages/jokes";
import MyJokes from "../pages/myJokes";
import NotFound from "../pages/notFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/piadas" component={Jokes} />
      <Route path="/sobre" component={About} />
      <Route path="/minhas-piadas" component={MyJokes} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
