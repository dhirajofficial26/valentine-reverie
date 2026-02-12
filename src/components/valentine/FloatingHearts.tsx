import { useMemo } from "react";

const HEART_CHARS = ["❤️", "💕", "💖", "💗", "♡", "🩷", "✨", "💫", "🌸", "💝", "💘", "🦋"];

interface Heart {
  id: number;
  left: number;
  char: string;
  duration: number;
  delay: number;
  size: number;
  swayClass: string;
  opacity: number;
}

const SWAY_CLASSES = [
  "animate-float-heart-sway-1",
  "animate-float-heart-sway-2",
  "animate-float-heart-sway-3",
];

const FloatingHearts = () => {
  const hearts = useMemo<Heart[]>(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: 2 + Math.random() * 96,
        char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
        duration: 14 + Math.random() * 12,
        delay: Math.random() * 14,
        size: 12 + Math.random() * 22,
        swayClass: SWAY_CLASSES[i % SWAY_CLASSES.length],
        opacity: 0.25 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 will-change-auto">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`absolute ${h.swayClass}`}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: 0,
            filter: h.size > 24 ? "blur(1px)" : "none",
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
