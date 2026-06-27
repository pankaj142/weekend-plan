import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function WelcomePage() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBrokenHearts, setShowBrokenHearts] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: "70%", left: "43%" });
  const [shake, setShake] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/when");
    }, 2000);
  };

  const handleNo = () => {
    setShowBrokenHearts(true);
    setTimeout(() => {
      alert("Oh come on… don’t break my heart 💔");
      setShowBrokenHearts(false);
    }, 2000);
  };

  const moveNoButton = () => {
    setShake(true);
    const newTop = Math.floor(Math.random() * 70 + 10) + "%";
    const newLeft = Math.floor(Math.random() * 70 + 10) + "%";
    setTimeout(() => {
      setNoButtonPos({ top: newTop, left: newLeft });
      setShake(false);
    }, 400);
  };

  return (

    <>

    {showConfetti && (
        <Confetti
          width={width - 10}
          height={height - 10}
          numberOfPieces={500}
          recycle={false}
        />
      )}

      
        <div className="card" style={{ position: "relative", height: "400px" }}>
      {showBrokenHearts && (
        <>
          <div className="dark-overlay"></div>
          <div className="emoji-burst">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="emoji">💔</span>
            ))}
          </div>
        </>
      )}

      <h2>Hey Priyanka…</h2>
      <p>You have worked so hard this week…</p>
      <p>Let's escape into our own little world this weekend 😎🤙🏻</p>
      <p>What do you think 😉</p>

      <div className="buttons">
        <button onClick={handleYes}>Absolutely, let’s make it magical!</button>
        <button
          onClick={handleNo}
          onMouseEnter={moveNoButton}
          onMouseOver={moveNoButton}
          className={`secondary no-button ${shake ? "shake" : ""}`}
          style={{
            position: "absolute",
            top: noButtonPos.top,
            left: noButtonPos.left,
          }}
        >
          NO
        </button>
      </div>
    </div>
    </>

  );
}

export default WelcomePage;
