/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";
import "./App.css";
import { Graph } from "./components/Graph";

function App() {
  const [randomValue, setRandomValue] = useState([0]);
  const [interpolationValue, setInterpolationValue] = useState([0]);
  const [range, setRange] = useState({
    min: 0,
    max: 10,
  });
  const [animationFrame, setAnimationFrame] = useState<any>();

  const getRandomValue = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const interpolateArray = () => {
    if (randomValue.length <= 4) {
      return randomValue[randomValue.length - 1];
    }

    const arrayLength = randomValue.length;

    return randomValue[arrayLength - 1] / 3;
  };

  const animate = () => {
    cancelAnimationFrame(animationFrame);

    setAnimationFrame(requestAnimationFrame(animate));

    const randomNumber = getRandomValue(range.max, range.min);
    randomValue.push(randomNumber);

    setRandomValue([...randomValue, randomNumber]);
  };

  const handleChangeRange = (e: any) => {
    setRange({
      min: Number(e.target.value),
      max: Number(e.target.value) + 10,
    });
  };

  useEffect(() => {
    animate();
  }, [range]);

  useEffect(() => {
    setInterpolationValue([...interpolationValue, interpolateArray()]);
  }, [randomValue]);

  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <p>{JSON.stringify(range)}</p>
      <p>Row data:</p>
      <Graph value={randomValue}></Graph>

      <p>Interpolation data:</p>
      <Graph value={interpolationValue}></Graph>
      <input type="range" onChange={handleChangeRange} />
    </div>
  );
}

export default App;
