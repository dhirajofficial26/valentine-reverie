import { useEffect, useState } from "react";

const HEART_CHARS = ["❤️", "💕", "💖", "💗", "💓", "♡", "🩷", "💘", "💝", "✨", "🌸"];

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
    const initial: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 15,
      size: 12 + Math.random() * 24,
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
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          } as React.CSSProperties}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
