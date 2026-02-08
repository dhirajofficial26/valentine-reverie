import { useState, useEffect, useCallback } from "react";

interface Page5Props {
  onNext: () => void;
}

const EMOJIS = ["❤️", "💕", "🌹", "💝", "💖", "🎁"];

interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const Page5MemoryGame = ({ onNext }: Page5Props) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [locked, setLocked] = useState(false);

  const initGame = useCallback(() => {
    const pairs = [...EMOJIS, ...EMOJIS];
    const shuffled = pairs.sort(() => Math.random() - 0.5).map((emoji, i) => ({
      id: i,
      emoji,
      flipped: false,
      matched: false,
    }));
    setCards(shuffled);
    setFlippedIds([]);
    setMoves(0);
    setMatched(0);
    setLocked(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  const handleFlip = (id: number) => {
    if (locked) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;

    const newCards = cards.map((c) => c.id === id ? { ...c, flipped: true } : c);
    setCards(newCards);
    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [first, second] = newFlipped;
      const c1 = newCards.find((c) => c.id === first)!;
      const c2 = newCards.find((c) => c.id === second)!;

      if (c1.emoji === c2.emoji) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === first || c.id === second ? { ...c, matched: true } : c))
          );
          setMatched((m) => m + 1);
          setFlippedIds([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => (c.id === first || c.id === second ? { ...c, flipped: false } : c))
          );
          setFlippedIds([]);
          setLocked(false);
        }, 800);
      }
    }
  };

  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">A little fun for today</p>
      <h1 className="valentine-title mb-3 text-center">Valentine Memory Match</h1>
      <p className="text-muted-foreground text-center text-sm mb-4">
        Match the pairs and test your memory 🧠
      </p>

      <div className="flex gap-6 mb-6">
        <div className="valentine-card-bg rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-muted-foreground">Moves</p>
          <p className="text-lg font-bold text-foreground">{moves}</p>
        </div>
        <div className="valentine-card-bg rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-muted-foreground">Matched</p>
          <p className="text-lg font-bold text-foreground">{matched}/6</p>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-sm w-full mb-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="memory-card aspect-square"
            onClick={() => handleFlip(card.id)}
          >
            <div className={`memory-card-inner w-full h-full ${card.flipped || card.matched ? "flipped" : ""}`}>
              {/* Back (question mark) */}
              <div
                className="memory-card-back"
                style={{
                  background: card.matched
                    ? "hsl(140, 50%, 60%)"
                    : "linear-gradient(135deg, hsl(330, 100%, 56%), hsl(340, 80%, 70%))",
                }}
              >
                <span className="text-2xl text-white font-bold">?</span>
              </div>
              {/* Front (emoji) */}
              <div
                className="memory-card-front"
                style={{
                  background: card.matched
                    ? "hsl(140, 50%, 85%)"
                    : "white",
                }}
              >
                <span className="text-3xl">{card.emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={initGame} className="valentine-btn-secondary">
          Reset Game
        </button>
        <button onClick={onNext} className="valentine-btn">
          Next 🐝 →
        </button>
      </div>
    </div>
  );
};

export default Page5MemoryGame;
