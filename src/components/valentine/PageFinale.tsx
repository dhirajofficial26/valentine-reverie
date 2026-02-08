import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bunnyImg from "@/assets/bunny.png";

interface PageFinaleProps {
  onRestart: () => void;
}

const PageFinale = ({ onRestart }: PageFinaleProps) => {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <p className="valentine-subtitle mb-2">Hey, I made something special for you...</p>
          <h1 className="valentine-title mb-4">Will You Be My Valentine? 💕</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(280, 50%, 75%), hsl(270, 55%, 65%))" }}
        >
          {/* Browser dots */}
          <div className="flex gap-2 mb-8">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center mb-6"
          >
            <span className="text-6xl">💝</span>
          </motion.div>

          <p className="text-white/95 text-center text-lg mb-3 leading-relaxed font-medium">
            A little reminder of what this day feels like with you.
          </p>

          <p className="text-white/75 text-center text-sm mb-8">
            Tap below when you're ready 🐝!
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setRevealed(true)}
            className="w-full py-4 px-8 rounded-full bg-white/95 text-purple-600 font-bold text-lg shadow-xl hover:bg-white transition-colors"
          >
            Open This 💝 →
          </motion.button>

          <img
            src={bunnyImg}
            alt="Bunny"
            className="absolute bottom-4 left-4 w-20 h-20 object-contain opacity-90"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="text-center"
        >
          {/* Celebration animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="text-8xl md:text-9xl animate-pulse-glow inline-block">
              💕
            </div>
            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="absolute text-2xl"
                style={{
                  top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                ✨
              </motion.span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(340, 85%, 45%), hsl(350, 80%, 55%), hsl(45, 90%, 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Happy Valentine's Day!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-foreground/80 mb-8 max-w-md mx-auto leading-relaxed"
          >
            This was made with love just for you! 💕<br />
            Hope you enjoyed this journey together. ❤️
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card-pink rounded-2xl p-6 mb-8 max-w-sm mx-auto"
          >
            <p className="font-script text-xl text-foreground mb-2">With all my love,</p>
            <p className="font-display text-2xl font-bold text-primary">Forever Yours 💝</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="premium-btn"
          >
            Experience Again 🐝 ↻
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageFinale;
