import React from "react";
import Today from "./pages/Today/Today";
import About from "./pages/About/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Today} />
        <Route exact path="/ab" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
