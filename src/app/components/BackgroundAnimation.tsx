'use client'
import React, { useEffect, useRef, useState } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let t = 0;

    const animate = () => {
      t += 0.005; // Adjust this value to change the speed of transition

      const startColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-start').split(',').map(Number);
      const endColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-end').split(',').map(Number);

      const r = Math.sin(t) * (endColor[0] - startColor[0]) / 2 + (endColor[0] + startColor[0]) / 2;
      const g = Math.sin(t) * (endColor[1] - startColor[1]) / 2 + (endColor[1] + startColor[1]) / 2;
      const b = Math.sin(t) * (endColor[2] - startColor[2]) / 2 + (endColor[2] + startColor[2]) / 2;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
      gradient.addColorStop(1, `rgb(${startColor[0]}, ${startColor[1]}, ${startColor[2]})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BackgroundAnimation;