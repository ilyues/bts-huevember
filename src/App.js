import React from "react";
import Today from "./pages/Today/Today";
import About from "./pages/About/About";
import Weekly from "./pages/Weekly/Weekly";
import Busy from "./pages/Busy/Busy";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  const [busyPrompt, setBusyPrompt] = React.useState(null);
  const [weeklyPrompt, setWeeklyPrompt] = React.useState(null);
  async function fetchData() {
    const busyRes = await axios.get(
      "https://api.airtable.com/v0/appmSi3iuK6vOde4s/Busy",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    const weeklyRes = await axios.get(
      "https://api.airtable.com/v0/appmSi3iuK6vOde4s/Weekly",
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );

    setBusyPrompt(busyRes.data.records);
    setWeeklyPrompt(weeklyRes.data.records);
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  if (!busyPrompt) {
    return <div></div>;
  }
  if (!weeklyPrompt) {
    return <div></div>;
  }
  return (
    <HashRouter basename="/">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Today busyPrompt={busyPrompt} weeklyPrompt={weeklyPrompt} />
          )}
        />

        <Route exact path="/ab" component={About} />
        <Route
          exact
          path="/wkly"
          render={() => (
            <Weekly busyPrompt={busyPrompt} weeklyPrompt={weeklyPrompt} />
          )}
        />
        <Route
          exact
          path="/alt"
          render={() => (
            <Busy busyPrompt={busyPrompt} weeklyPrompt={weeklyPrompt} />
          )}
        />
      </Switch>
    </HashRouter>
  );
}
