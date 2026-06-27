import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  const { width, height } = useWindowSize();
  const location = useLocation();
  const { activity, date, time } = location.state || {};

  const parsedDate = date ? new Date(date) : null;

  const formatDate = (dateObj) => {
    if (!(dateObj instanceof Date) || isNaN(dateObj)) return "";
    const day = dateObj.getDate().toString().padStart(2, "0");
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

const closingLines = [
  "Let’s kick back, relax, and enjoy every moment together 🌴✨",
  "Smiles, jokes, and endless fun — this night is all about fun 😄🎈",
  "Here’s to laughter, good vibes, and unforgettable memories 🥳🍕",
  "Ready for a night of surprises, fun, and pure enjoyment 🚀🎶",
  "No stress, just joy — let’s make this evening our happy escape 🌙🍹",
  "Music, laughter, and good times — this night is going to be epic 🎉🎶",
  "Can’t wait to laugh until our cheeks hurt and enjoy every second 😍✨",
  "Let’s unwind, laugh, and soak in the good vibes 🌊🍹",
  "Smiles, jokes, and pure fun — this night is all about joy 😄🎈",
  "Here’s to laughter, music, and unforgettable memories 🥳🎶",
  "Ready for surprises, fun, and stories we’ll laugh about forever 🚀✨",
  "No rush, no stress — just us enjoying every moment 🌙🍕",
  "This night is going to be epic — fun, laughter, and good times 🎉🍻",
  "Can’t wait to laugh until our cheeks hurt and dance the night away 💃😄",
  "Let’s escape the routine and enjoy a carefree evening together 🌴✨",
  "Games, giggles, and endless fun — tonight is all about us 🎲😆",
  "Raise a toast to joy, laughter, and the best night ever 🥂🎊",
  "Relax, laugh, and let the good times roll 🌙🎶",
  "Get ready for fun, excitement, and a night full of surprises 🎇😄"
];
const randomClosing = closingLines[Math.floor(Math.random() * closingLines.length)];



  return (
    <div className="card success">
      {/* Floating hearts */}
      <div className="hearts">
        <div className="heart">🎉</div>
        <div className="heart">💖</div>
        <div className="heart">✨</div>
        <div className="heart">💕</div>
        <div className="heart">🎈</div>
      </div>

      <Confetti width={width-10} height={height-10} numberOfPieces={400} recycle={false} />

      <h2 className="romantic-title">🌴 Weekend Escape Awaits!</h2>
      <p className="subtitle">Time to relax, laugh, and enjoy together…</p>
      {/* <p className="subtitle">Smiles, surprises, and endless enjoyment await…</p> */}


      <div className="info-box">
        <h3>When</h3>
        <p>
          At <span className="highlight">{time.time}</span> on{" "}
          <span className="highlight">{formatDate(parsedDate)}</span>
        </p>

        <h3>What we’ll Enjoy...</h3>
        <p className="activity">
          <strong>{activity?.name}</strong>{activity?.emoji} 
        </p>
        <p className="desc">{activity?.desc}</p>
      </div>
      <p className="closing">{randomClosing}</p>
    </div>
  );
}

export default SuccessPage;
