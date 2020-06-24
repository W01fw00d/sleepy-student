import React from "react";
import "./App.css";

import copy from "copy-to-clipboard";

import classesSchedule from "./schedules/level1.json";

function App() {
  const ROOM_BASE_URL = "https://zoom.us/j/";
  var DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = DAYS[new Date().getDay()];
  const todaysClass = classesSchedule[dayName];

  return (
    <div className="App">
      <header className="App-header" onClick={() => copy(todaysClass.password)}>
        {todaysClass ? (
          <>
            <p>
              Good morning! Today you will attend {todaysClass.class}, with{" "}
              {todaysClass.teacher}
              -sensei
            </p>
            <a
              href={`${ROOM_BASE_URL}${todaysClass.roomId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to class!
            </a>
          </>
        ) : (
          <p> You have no classes scheduled for today </p>
        )}
      </header>
    </div>
  );
}

export default App;
