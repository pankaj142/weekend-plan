import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import DatePage from "./components/DatePage";
import TimePage from "./components/TimePage";
import ActivityPage from "./components/ActivityPage";
import SuccessPage from "./components/SuccessPage";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [activities, setActivities] = useState([]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/when" element={<DatePage setDate={setDate} />} />
          <Route path="/whattime" element={<TimePage setTime={setTime} />} />
          <Route path="/plan" element={<ActivityPage activities={activities} setActivities={setActivities} />} />
          <Route path="/done" element={<SuccessPage date={date} time={time} activities={activities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
