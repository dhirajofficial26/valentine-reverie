import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { finaleConfig, userDetails } from "@/config/valentineConfig";

interface PageFinaleProps {
  onRestart: () => void;
}

const PageFinale = ({ onRestart }: PageFinaleProps) => {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
        <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-20 left-10 text-3xl opacity-40">💕</motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute top-32 right-12 text-2xl opacity-30">✨</motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-script text-xl md:text-2xl text-muted-foreground mb-2">{finaleConfig.preRevealSubtitle}</motion.p>
          <motion.h1 initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="valentine-title">{finaleConfig.preRevealTitle}</motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="rounded-3xl p-8 max-w-md w-full relative overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, hsl(280, 55%, 78%), hsl(270, 60%, 68%))" }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex gap-2 mb-8">
            {[{ bg: "hsl(0, 70%, 60%)" }, { bg: "hsl(45, 90%, 55%)" }, { bg: "hsl(140, 70%, 50%)" }].map((dot, i) => (
              <motion.div key={i} whileHover={{ scale: 1.3 }} className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: dot.bg }} />
            ))}
          </motion.div>

          <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="text-center mb-6"><span className="text-7xl">💝</span></motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-white/95 text-center text-lg mb-3 leading-relaxed font-medium">{finaleConfig.preRevealMessage}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-white/75 text-center text-sm mb-8">{finaleConfig.preRevealHint}</motion.p>

          <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => setRevealed(true)}
            className="w-full py-4 px-8 rounded-full font-bold text-lg shadow-xl transition-all" style={{ background: "white", color: "hsl(280, 55%, 55%)" }}>
            {finaleConfig.openBtn}
          </motion.button>

          <motion.img initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, type: "spring" }} whileHover={{ scale: 1.1, rotate: 10 }}
            src={finaleConfig.mascotImage} alt="Bunny" className="absolute bottom-4 left-4 w-20 h-20 object-contain cursor-pointer" />
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div key={i} initial={{ y: -50, x: 0, opacity: 1, scale: 0 }}
            animate={{ y: [0, window.innerHeight + 100], x: [0, (Math.random() - 0.5) * 300], opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.5], rotate: [0, Math.random() * 720] }}
            transition={{ duration: 3 + Math.random() * 2, delay: Math.random() * 1, ease: "easeOut", repeat: Infinity, repeatDelay: Math.random() * 3 }}
            className="fixed text-2xl pointer-events-none z-50" style={{ left: `${Math.random() * 100}%`, top: -50 }}>
            {["🎉", "💕", "✨", "🎊", "💖", "⭐", "🩷", "💝"][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 12 }} className="text-center z-10">
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring", damping: 10 }} className="relative mb-8 inline-block">
            <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-8xl md:text-9xl">💕</motion.div>
            {[...Array(10)].map((_, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 180] }}
                transition={{ delay: 0.5 + i * 0.15, duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                className="absolute text-xl md:text-2xl"
                style={{ top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 10)}%`, left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 10)}%`, transform: "translate(-50%, -50%)" }}>
                ✨
              </motion.span>
            ))}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ background: "linear-gradient(135deg, hsl(340, 85%, 45%), hsl(350, 80%, 55%), hsl(45, 90%, 55%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {finaleConfig.celebrationTitle}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-xl text-foreground/80 mb-8 max-w-md mx-auto leading-relaxed whitespace-pre-line">
            {finaleConfig.celebrationMessage}
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, type: "spring" }} className="glass-card-pink rounded-3xl p-8 mb-8 max-w-sm mx-auto">
            <motion.p animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="font-script text-2xl text-foreground mb-2">{finaleConfig.closingMessage}</motion.p>
            <p className="font-display text-3xl font-bold text-primary">{userDetails.finalSignOff}</p>
          </motion.div>

          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onRestart} className="premium-btn text-lg">
            {finaleConfig.restartBtn}
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageFinale;
