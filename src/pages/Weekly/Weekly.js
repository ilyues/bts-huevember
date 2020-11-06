import React from "react";
import "./Weekly.css";
import Nav from "../../components/Nav";

export default function Weekly(props) {
  const [selectedWeek, setSelectedWeek] = React.useState(0);
  const orderedWeeks = [];
  for (var i = 1; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      if (parseInt(props.weeklyPrompt[j].fields.Name) === i) {
        orderedWeeks.push(props.weeklyPrompt[j].fields);
      }
    }
  }

  const circle_r = 15;
  const circle_x = 60;
  return (
    <div className="weekly">
      <Nav />
      <div className="weekly-container">
        <div className="weekly-header">Weekly Schedule</div>
        <div className="weekly-insp-img-container">
          <img
            className="weekly-insp-img"
            src={orderedWeeks[selectedWeek].InspURL}
          />
        </div>

        <div className="weekly-prompt-container">
          {orderedWeeks.map((currWeek, index) => (
            <div
              className={`weekly-prompt-div ${
                selectedWeek === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => setSelectedWeek(index)}
              selected={selectedWeek === index}
            >
              <div className="weekly-prompt-header">Week 0{currWeek.Name}:</div>
              <div className="weekly-prompt-text">{currWeek.Prompt}</div>
              <div className="weekly-palette">
                <ul>
                  <li style={{ color: currWeek.Colour1 }}>
                    {currWeek.Colour1}
                  </li>
                  <li style={{ color: currWeek.Colour2 }}>
                    {currWeek.Colour2}
                  </li>
                  <li style={{ color: currWeek.Colour3 }}>
                    {currWeek.Colour3}
                  </li>
                  <li style={{ color: currWeek.Colour4 }}>
                    {currWeek.Colour4}
                  </li>
                  <li style={{ color: currWeek.Colour5 }}>
                    {currWeek.Colour5}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="weekly-circles">
        <svg className="the-actual-circles" viewBox="30 0 60 400">
          <circle
            cy={40}
            cx={circle_x}
            r={circle_r}
            fill={orderedWeeks[selectedWeek].Colour1}
          />
          <circle
            cy={80}
            cx={circle_x}
            r={circle_r}
            fill={orderedWeeks[selectedWeek].Colour2}
          />
          <circle
            cy={120}
            cx={circle_x}
            r={circle_r}
            fill={orderedWeeks[selectedWeek].Colour3}
          />
          <circle
            cy={160}
            cx={circle_x}
            r={circle_r}
            fill={orderedWeeks[selectedWeek].Colour4}
          />
          <circle
            cy={200}
            cx={circle_x}
            r={circle_r}
            fill={orderedWeeks[selectedWeek].Colour5}
          />
        </svg>
      </div>
    </div>
  );
}
