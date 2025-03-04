import React from "react";

function CounterDisplay({ count }) {
  const counterStyle = {
    fontSize: "26px",
    color: "#333",
  };

  return (
    <div style={counterStyle}>
      <p>{count}</p>
    </div>
  );
}

export default CounterDisplay;
