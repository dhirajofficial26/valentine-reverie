import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showConfetti, setShowConfetti] = useState(false);

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
    setShowConfetti(false);
  }, []);

  useEffect(() => { initGame(); }, [initGame]);

  useEffect(() => {
    if (matched === 6) {
      setShowConfetti(true);
      setTimeout(() => setGameWon(true), 800);
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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
        {/* Confetti */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: -20, 
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              opacity: 1,
              scale: 0
            }}
            animate={{ 
              y: window.innerHeight + 100,
              x: Math.random() * 200 - 100,
              opacity: [1, 1, 0],
              scale: 1,
              rotate: Math.random() * 720
            }}
            transition={{ 
              duration: 2.5 + Math.random() * 2,
              delay: Math.random() * 0.5,
              ease: "easeOut"
            }}
            className="fixed text-2xl pointer-events-none z-50"
            style={{ left: "50%" }}
          >
            {["🎉", "💕", "✨", "🎊", "💖", "⭐"][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="glass-card-pink rounded-3xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            🎉
          </motion.div>

          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            You Won! 💕
          </h2>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="glass-card rounded-2xl p-6 mb-6"
          >
            <p className="text-4xl font-bold text-primary mb-1">{moves}</p>
            <p className="text-muted-foreground">Moves</p>
          </motion.div>

          <p className="text-lg text-foreground/80 mb-6">
            Amazing memory skills! 🧠✨
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={initGame}
              className="secondary-btn flex-1"
            >
              Play Again 🔄
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
    <div className="min-h-screen flex flex-col items-center px-4 py-8 relative">
      {/* Floating decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 text-3xl opacity-20"
      >
        🎮
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-32 left-8 text-2xl opacity-25"
      >
        🧩
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-script text-xl md:text-2xl text-muted-foreground mb-2"
        >
          A little fun for today 🎮
        </motion.p>
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="valentine-title"
        >
          Memory Match
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mt-3"
        >
          Match the pairs and test your memory 🧠
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6 mb-6"
      >
        <div className="glass-card rounded-xl px-6 py-3 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Moves</p>
          <motion.p
            key={moves}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-foreground"
          >
            {moves}
          </motion.p>
        </div>
        <div className="glass-card rounded-xl px-6 py-3 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Matched</p>
          <motion.p
            key={matched}
            initial={{ scale: 1.5, color: "hsl(340, 85%, 55%)" }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-primary"
          >
            {matched}/6
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-sm md:max-w-md w-full mb-8"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.6 + i * 0.05 }}
            whileHover={!card.flipped && !card.matched ? { scale: 1.08, y: -5 } : {}}
            whileTap={!card.flipped && !card.matched ? { scale: 0.95 } : {}}
            className="memory-card aspect-square"
            onClick={() => handleFlip(card.id)}
          >
            <motion.div 
              className={`memory-card-inner w-full h-full ${card.flipped || card.matched ? "flipped" : ""}`}
              animate={card.matched ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <div
                className="memory-card-back premium-shadow"
                style={{
                  background: card.matched
                    ? "linear-gradient(135deg, hsl(140, 60%, 50%), hsl(150, 70%, 45%))"
                    : "linear-gradient(135deg, hsl(340, 85%, 55%), hsl(350, 80%, 60%))",
                }}
              >
                {card.matched ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="text-3xl md:text-4xl"
                  >
                    {card.emoji}
                  </motion.span>
                ) : (
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl font-bold text-white"
                  >
                    ?
                  </motion.span>
                )}
              </div>
              <div
                className="memory-card-front glass-card"
                style={{
                  background: card.matched
                    ? "linear-gradient(135deg, hsl(140, 60%, 90%), hsl(150, 70%, 85%))"
                    : "white",
                }}
              >
                <span className="text-3xl md:text-4xl">{card.emoji}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={initGame}
          className="secondary-btn"
        >
          Reset 🔄
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="premium-btn"
        >
          Skip 🐝 →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PageMemoryGame;
