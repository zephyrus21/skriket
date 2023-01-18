export const drawLine = ({
  ctx,
  currentPoint,
  prevPoint,
  color,
}: Draw & { color: string }) => {
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
};
