import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Light from "./styles/themes/Light";
import Navbar from "./components/Navbar";
import Route from "./Routes";
import Store from "./store";

export default function App() {
  return (
    <Store>
      <ThemeProvider theme={Light}>
        <Router>
          <CssBaseline />
          <Navbar />
          <main>
            <Route />
          </main>
        </Router>
      </ThemeProvider>
    </Store>
  );
}
