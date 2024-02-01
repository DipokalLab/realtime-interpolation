/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

function Graph({ value }: any) {
  const [index, setIndex] = useState(-1);
  const canvasRef = useRef();

  useEffect(() => {
    setIndex(index + 1);
  }, [value]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let arrayIndex = 0; arrayIndex < value.length; arrayIndex++) {
      if (index > window.innerWidth) {
        ctx.fillRect(
          arrayIndex,
          value[arrayIndex + (index - window.innerWidth)],
          2,
          2
        );
        continue;
      }

      ctx.fillRect(arrayIndex, value[arrayIndex], 2, 2);
    }
  }, [index]);

  return <canvas width={window.innerWidth} ref={canvasRef}></canvas>;
}

export { Graph };
