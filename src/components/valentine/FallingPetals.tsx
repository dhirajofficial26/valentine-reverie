import { useMemo } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const FallingPetals = () => {
  // Reduced from 30 to 12 petals for better performance
  const petals = useMemo<Petal[]>(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 8,
      size: 16 + Math.random() * 14,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall-petal opacity-70"
          style={{
            left: `${petal.x}%`,
            top: "-30px",
            width: petal.size,
            height: petal.size * 0.6,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 16"
            fill="none"
            className="w-full h-full"
          >
            <ellipse
              cx="12"
              cy="8"
              rx="10"
              ry="6"
              fill="hsl(340, 80%, 83%)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
