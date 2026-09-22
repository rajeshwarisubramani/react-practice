import { useEffect, useState } from "react";
import "./ColorizeComponent.css";

export const ColorizeComponent = () => {
  const [color, setColor] = useState("#a033ff");

  useEffect(() => {});

  const getRandom = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomColor;
  };

  const changeColor = () => {
    console.log("ColorChnage");
    setColor(getRandom());
  };

  return (
    <div className="colorize">
      <h1>Colorize Component</h1>
      <div className="box" style={{ backgroundColor: color }}>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </div>
  );
};
