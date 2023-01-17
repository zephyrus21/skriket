"use client";

import React, { useState } from "react";
import { CirclePicker } from "@hello-pangea/color-picker";
import { useDraw } from "@/hooks/useDraw";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [color, setColor] = useState<string>("#000");
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ ctx, currentPoint, prevPoint }: Draw) {
    const { x: currentX, y: currentY } = currentPoint;
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center gap-8'>
      <div className='flex flex-col gap-4'>
        <CirclePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button
          onClick={clear}
          className='p-4 bg-slate-500 text-white rounded-md'>
          Clear
        </button>
      </div>
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  );
};

export default Home;
