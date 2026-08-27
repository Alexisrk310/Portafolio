import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export function TypingAnimation({
  words,
  speed = 80,
  deleteSpeed = 50,
  delay = 1800,
  className = '',
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          if (displayText.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, delay]);

  return (
    <span
      className={`border-r-2 border-cyan-400 pr-1 ${className}`}
      style={{ animation: 'blink-cursor 0.8s step-end infinite' }}
    >
      {displayText}
    </span>
  );
}
