/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import "./App.css";
import { Graph } from "./components/Graph";

function App() {
  const [randomValue, setRandomValue] = useState([0]);
  const [interpolationValue, setInterpolationValue] = useState([0]);

  const getRandomValue = () => {
    return Math.floor(Math.random() * 10);
  };

  const interpolateArray = () => {};

  const animate = () => {
    requestAnimationFrame(animate);

    const randomNumber = getRandomValue();
    randomValue.push(randomNumber);

    setRandomValue([...randomValue, randomNumber]);
    setInterpolationValue([...randomValue, randomNumber]);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <p>Row data:</p>
      <Graph value={randomValue}></Graph>

      <p>Interpolation data:</p>
      <Graph value={interpolationValue}></Graph>
    </div>
  );
}

export default App;
