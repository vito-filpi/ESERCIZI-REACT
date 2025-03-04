import React from "react";

// Component Color
function Color({ color }) {
  return <li>{color.name}</li>;
}

// Component Colors
function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export default Colors;
