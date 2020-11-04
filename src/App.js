import React from "react";
import Today from "./pages/Today/Today";
import About from "./pages/About/About";
import Weekly from "./pages/Weekly/Weekly";
import Busy from "./pages/Busy/Busy";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Today} />
        <Route exact path="/ab" component={About} />
        <Route exact path="/wkly" component={Weekly} />
        <Route exact path="/alt" component={Busy} />
      </Switch>
    </HashRouter>
  );
}
