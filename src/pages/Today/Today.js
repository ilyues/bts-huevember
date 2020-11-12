import React from "react";
import moment from "moment";
import "./Today.css";
import axios from "axios";
import Nav from "../../components/Nav";

export default function Today() {
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
  const mystyles = {
    color: "#F4F4F4",
  };

  const currDay = parseInt(moment().format("D"));
  const today = moment().format("MMMM Do");
  var currWeek = null;
  var upcomingDay;

  for (var i = 0; i < 4; i++) {
    if (
      currDay >= weeklyPrompt[i].fields.FirstDay &&
      currDay <= weeklyPrompt[i].fields.LastDay
    ) {
      currWeek = weeklyPrompt[i].fields;
    }
  }

  if (!currWeek) {
    currWeek = weeklyPrompt[0].fields;
  }

  const circle_r = 15;
  const circle_y = 15;

  var j = 30;
  for (var i = 0; i < 11; i++) {
    if (currDay <= busyPrompt[i].fields.Day && j > busyPrompt[i].fields.Day) {
      j = busyPrompt[i].fields.Day;
      upcomingDay = busyPrompt[i].fields;
    }
  }

  return (
    <div className="home">
      <Nav />
      <div className="today-container">
        <div className="tagline">
          <a href="https://twitter.com/search?q=%23BTShuevember2020&src=typeahead_click">
            #BTSHUEVEMBER2020
          </a>{" "}
          with <a href="https://twitter.com/Katamism">Kata</a> +{" "}
          <a href="https://twitter.com/kayedaily_">Kaye</a>!
        </div>
        <div className="today">{today}</div>
        <div className="daily-prompt">
          <div className="prompt-header">
            Day {upcomingDay.Day.toString().padStart(2, "0")}: {}
          </div>
          <div className="daily-tagline">next upcoming day</div>
          <div className="palette">
            <ul>
              <li style={{ color: upcomingDay.Colour1 }}>
                {upcomingDay.Colour1}
              </li>
              <li style={{ color: upcomingDay.Colour2 }}>
                {upcomingDay.Colour2}
              </li>
              <li style={{ color: upcomingDay.Colour3 }}>
                {upcomingDay.Colour3}
              </li>
              <li style={{ color: upcomingDay.Colour4 }}>
                {upcomingDay.Colour4}
              </li>
              <li style={{ color: upcomingDay.Colour5 }}>
                {upcomingDay.Colour5}
              </li>
            </ul>
          </div>
        </div>

        <div className="weekly-prompt">
          <div className="prompt-header">{currWeek.Name}:</div>
          <div className="prompt-text">{currWeek.Prompt}</div>
          <div className="palette">
            <ul>
              <li style={{ color: currWeek.Colour1 }}>{currWeek.Colour1}</li>
              <li style={{ color: currWeek.Colour2 }}>{currWeek.Colour2}</li>
              <li style={{ color: currWeek.Colour3 }}>{currWeek.Colour3}</li>
              <li style={{ color: currWeek.Colour4 }}>{currWeek.Colour4}</li>
              <li style={{ color: currWeek.Colour5 }}>{currWeek.Colour5}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="circle-1">
        <svg viewBox="0 0 600 80">
          <circle cx={40} cy={circle_y} r={circle_r} fill={currWeek.Colour1} />
          <circle cx={80} cy={circle_y} r={circle_r} fill={currWeek.Colour2} />
          <circle cx={120} cy={circle_y} r={circle_r} fill={currWeek.Colour3} />
          <circle cx={160} cy={circle_y} r={circle_r} fill={currWeek.Colour4} />
          <circle cx={200} cy={circle_y} r={circle_r} fill={currWeek.Colour5} />
        </svg>
      </div>
      <div className="circle-2">
        <svg viewBox="0 0 600 80">
          <circle
            cx={40}
            cy={circle_y}
            r={circle_r}
            fill={upcomingDay.Colour1}
          />
          <circle
            cx={80}
            cy={circle_y}
            r={circle_r}
            fill={upcomingDay.Colour2}
          />
          <circle
            cx={120}
            cy={circle_y}
            r={circle_r}
            fill={upcomingDay.Colour3}
          />
          <circle
            cx={160}
            cy={circle_y}
            r={circle_r}
            fill={upcomingDay.Colour4}
          />
          <circle
            cx={200}
            cy={circle_y}
            r={circle_r}
            fill={upcomingDay.Colour5}
          />
        </svg>
      </div>
      <div className="insp-1">
        <div className="insp-header">{currWeek.Name} inspo.png</div>
        <img className="insp-img" src={currWeek.InspURL} />
      </div>
      <div className="insp-2">
        <div className="insp-header">Day {upcomingDay.Day} inspo.png</div>
        <img className="insp-img" src={upcomingDay.InspURL} />
      </div>
      <div className="signature">
        site by <a href="https://twitter.com/ilyues">@ilyues</a>
      </div>
    </div>
  );
}
