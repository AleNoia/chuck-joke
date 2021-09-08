import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/about";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
