import { useEffect, useState, useMemo } from "react";

const HEART_CHARS = ["❤️", "💕", "💖", "💗", "♡", "🩷"];

interface Heart {
  id: number;
  left: number;
  char: string;
  duration: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  // Reduced from 25 to 10 for better performance
  const hearts = useMemo<Heart[]>(() => 
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      duration: 12 + Math.random() * 8, // Slower animations
      delay: Math.random() * 10,
      size: 14 + Math.random() * 16,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 will-change-auto">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart opacity-60"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
