"use client";

import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -999, y: -999 };
    const blob = { x: -999, y: -999 };
    let rafId: number;
    let t = 0;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const draw = () => {
      t += 0.04;

      // smooth follow
      blob.x += (mouse.x - blob.x) * 0.08;
      blob.y += (mouse.y - blob.y) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw morphing blob using bezier curves
      const r = 38;
      const wobble = 10;

      ctx.beginPath();

      const points = 6;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const nextAngle = ((i + 1) / points) * Math.PI * 2;

        const rx = r + Math.sin(t * 1.3 + i * 1.2) * wobble;
        const ry = r + Math.cos(t * 1.1 + i * 0.9) * wobble;

        const x = blob.x + Math.cos(angle) * rx;
        const y = blob.y + Math.sin(angle) * ry;

        const cpRx = r + Math.sin(t * 1.5 + i * 1.4) * wobble;
        const cpRy = r + Math.cos(t * 1.2 + i * 1.1) * wobble;
        const cpAngle = (angle + nextAngle) / 2;
        const cpX = blob.x + Math.cos(cpAngle) * cpRx * 1.3;
        const cpY = blob.y + Math.sin(cpAngle) * cpRy * 1.3;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.quadraticCurveTo(cpX, cpY, x, y);
        }
      }

      ctx.closePath();

      // orange gradient fill
      const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, r + wobble);
      grad.addColorStop(0, "rgba(255, 140, 30, 0.18)");
      grad.addColorStop(0.5, "rgba(255, 90, 0, 0.08)");
      grad.addColorStop(1, "rgba(255, 60, 0, 0)");

      ctx.fillStyle = grad;
      ctx.fill();

      // soft glowing border
      ctx.strokeStyle = "rgba(255, 140, 30, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
};
