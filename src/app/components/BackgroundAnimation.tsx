'use client'

import React, { useEffect, useState } from 'react';

const CodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20L18 28L16 30L6 20L16 10L18 12L10 20Z" fill="currentColor"/>
    <path d="M30 20L22 28L24 30L34 20L24 10L22 12L30 20Z" fill="currentColor"/>
  </svg>
);

const RobotArmIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="10" r="5" fill="currentColor" />
    <rect x="18" y="10" width="4" height="20" fill="currentColor" />
    <circle cx="20" cy="30" r="3" fill="currentColor" />
    <rect x="18" y="30" width="4" height="10" transform="rotate(30 18 30)" fill="currentColor" />
    <circle cx="22" cy="38" r="2" fill="currentColor" />
  </svg>
);

const BackgroundElement = ({ type }: { type: 'code' | 'robot' }) => (
  <div className={`bg-element ${type}`}>
    {type === 'code' ? <CodeIcon /> : <RobotArmIcon />}
  </div>
);

const BackgroundAnimation = () => {
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newElements = [...Array(20)].map((_, i) => (
      <div key={i} className="element-wrapper" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${30 + Math.random() * 20}s`
      }}>
        <BackgroundElement type={i % 2 === 0 ? 'code' : 'robot'} />
      </div>
    ));
    setElements(newElements);
  }, []);

  return (
    <div className="background-animation-container">
      <div className="background-animation">
        {elements}
      </div>
    </div>
  );
};

export default BackgroundAnimation;