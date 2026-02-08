import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface PageMemoryGameProps {
  onNext: () => void;
}

const EMOJIS = ["❤️", "💕", "🌹", "💝", "💖", "🎁"];

interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const PageMemoryGame = ({ onNext }: PageMemoryGameProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matched, setMatched] = useState(0);
  const [locked, setLocked] = useState(false);
  const [gameWon, setGameWon] = useState(false);

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
    setGameWon(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  useEffect(() => {
    if (matched === 6) {
      setTimeout(() => setGameWon(true), 500);
    }
  }, [matched]);

  const handleFlip = (id: number) => {
    if (locked || gameWon) return;
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
        }, 400);
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

  if (gameWon) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-pink rounded-3xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-7xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            You Won! 💕
          </h2>

          <div className="glass-card rounded-2xl p-6 mb-6">
            <p className="text-3xl font-bold text-primary mb-1">{moves} Moves</p>
            <p className="text-muted-foreground text-sm">Great memory skills!</p>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={initGame}
              className="secondary-btn flex-1"
            >
              Play Again
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="premium-btn flex-1"
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="valentine-subtitle mb-2">A little fun for today 🎮</p>
        <h1 className="valentine-title mb-4">Memory Match</h1>
        <p className="text-muted-foreground mb-2">
          Match the pairs and test your memory 🧠
        </p>
      </motion.div>

      <div className="flex gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-xl px-6 py-3 text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Moves</p>
          <p className="text-2xl font-bold text-foreground">{moves}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-xl px-6 py-3 text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Matched</p>
          <p className="text-2xl font-bold text-primary">{matched}/6</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-sm w-full mb-8"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={!card.flipped && !card.matched ? { scale: 1.05 } : {}}
            whileTap={!card.flipped && !card.matched ? { scale: 0.95 } : {}}
            className="memory-card aspect-square"
            onClick={() => handleFlip(card.id)}
          >
            <div className={`memory-card-inner w-full h-full ${card.flipped || card.matched ? "flipped" : ""}`}>
              <div
                className="memory-card-back premium-shadow"
                style={{
                  background: card.matched
                    ? "linear-gradient(135deg, hsl(140, 60%, 50%), hsl(150, 70%, 45%))"
                    : "linear-gradient(135deg, hsl(340, 85%, 55%), hsl(350, 80%, 60%))",
                }}
              >
                <span className="text-2xl font-bold text-white">?</span>
              </div>
              <div
                className="memory-card-front glass-card"
                style={{
                  background: card.matched
                    ? "linear-gradient(135deg, hsl(140, 60%, 90%), hsl(150, 70%, 85%))"
                    : "white",
                }}
              >
                <span className="text-3xl">{card.emoji}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={initGame}
          className="secondary-btn"
        >
          Reset Game
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="premium-btn"
        >
          Skip to Next 🐝 →
        </motion.button>
      </div>
    </div>
  );
};

export default PageMemoryGame;
