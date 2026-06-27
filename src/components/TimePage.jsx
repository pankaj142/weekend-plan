import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TimePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const {date} = location.state;

  const handleSelect = (time) => {
    navigate("/plan", { state: { date, time } });
  };

  const timeOptions = [
    { time: "1:00 PM", label: "Afternoon ☀️" },
    { time: "6:30 PM", label: "Evening 🌅" },
    { time: "8:00 PM", label: "Night 🌌" },
    { time: "9:30 PM", label: "Late Night 🌙" },
  ];

  return (
    <div className="card large-card">
      <h2>Pick the perfect time 💕</h2>
      <div className="column">
        {timeOptions.map((opt) => (
          <div
            key={opt.time}
            className="time-card"
            onClick={() => handleSelect(opt)}
          >
            <div className="time-row">
              <h3>{opt.label}</h3>
              <span className="time">{opt.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimePage;
