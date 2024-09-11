'use client'
import React, { useState, useEffect } from 'react';
import styles from './AdvancedTypingHeading.module.css';

interface AdvancedTypingHeadingProps {
  phrases: string[];
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

const AdvancedTypingHeading: React.FC<AdvancedTypingHeadingProps> = ({ 
  phrases, 
  speed = 50, 
  pauseDuration = 1000,
  className = '' 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentPhrase[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentCharIndex(prev => prev - 1);
      }, speed / 2);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCurrentCharIndex(0);
    }
  }, [currentCharIndex, currentPhraseIndex, displayedText, isDeleting, phrases, speed, pauseDuration]);

  return (
    <h1 className={`${className} ${styles.typingContainer}`}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </h1>
  );
};

export default AdvancedTypingHeading;
