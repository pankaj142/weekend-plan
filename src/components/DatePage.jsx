import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Navigate to next page after selecting date
    setTimeout(() => {
      navigate("/whattime", {state : {date}}); // replace with your next route
    }, 1500);
  };

  return (
    <div
      className="card large-card"
      style={{
        width: "650px",
        height: "550px",
        margin: "auto",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h2>When are you free, my sunshine? 🌞</h2> 
      <p>I want to steal a day just for us…</p>
      
      <div style={{ display: "inline-block", position: "relative" }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline // keeps calendar open by default
          minDate={new Date()} // only allow today onwards
        />
        {selectedDate && (
          <span className="heart-pulse">🥳</span>
        )}
      </div>
    </div>
  );
}

export default DatePage;
