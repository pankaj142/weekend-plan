import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ActivityPage() {
  const navigate = useNavigate();
  const location = useLocation()
  const { date, time} = location.state;

  const handleSelect = (activity) => {
    navigate("/done", { state: { activity, date, time } });
  };

  const activityOptions = [
    {
      name: "Dinner",
      emoji: "🍽️",
      desc: "Romantic candlelight dinner together",
    },
    {
      name: "Comedy Show",
      emoji: "😂",
      desc: "Laugh the night away with me",
    },
    {
      name: "Movie",
      emoji: "🎬",
      desc: "Cozy movie night with popcorn",
    },
    {
      name: "Long Drive",
      emoji: "🚗",
      desc: "Scenic drive under the stars",
    },
  ];

  // console.log("activity ",activity )
  return (
    <div className="card large-card">
      <h2>How would you like to spend this weekend fun and relaxing ??</h2>
      <div className="grid">
        {activityOptions.map((opt) => (
          <div
            key={opt.name}
            className="activity-card"
            onClick={() => handleSelect(opt)}
          >
            <h3>{opt.emoji} {opt.name}</h3>
            <p>{opt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityPage;
