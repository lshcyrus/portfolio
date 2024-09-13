'use client'
import React, { useState, useEffect } from 'react';
import styles from './TypingHeading.module.css';

interface TypingHeadingProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({ text, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <h1 className={`${className} ${styles.typingContainer}`}>
      {displayedText}
      <span className={`${styles.cursor} ${isFinished ? styles.fadeOut : ''}`}>|</span>
    </h1>
  );
};

export default TypingHeading;
