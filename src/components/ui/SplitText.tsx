import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('.letter');
    
    gsap.set(letters, { opacity: 0, y: 50, rotateX: -90 });
    
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.05,
      delay,
      ease: "back.out(1.7)",
    });
  }, [delay]);

  const splitText = text.split('').map((char, index) => (
    <span key={index} className="letter inline-block" style={{ transformOrigin: '50% 50% -50px' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <span ref={textRef} className={`split-text ${className}`}>
      {splitText}
    </span>
  );
};

export default SplitText;