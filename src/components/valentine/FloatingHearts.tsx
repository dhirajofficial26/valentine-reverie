import { useEffect, useState } from "react";

const HEART_CHARS = ["❤️", "💕", "💖", "💗", "💓", "♡", "🩷"];

interface Heart {
  id: number;
  left: number;
  char: string;
  duration: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      size: 14 + Math.random() * 18,
    }));
    setHearts(initial);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            "--duration": `${h.duration}s`,
            "--delay": `${h.delay}s`,
            animationDelay: `${h.delay}s`,
          } as React.CSSProperties}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
