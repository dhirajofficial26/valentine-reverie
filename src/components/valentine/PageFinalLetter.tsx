import { motion } from "framer-motion";

interface PageFinalLetterProps {
  onNext: () => void;
}

const PageFinalLetter = ({ onNext }: PageFinalLetterProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="valentine-subtitle mb-2">the grand finale... 📜</p>
        <h1 className="valentine-title mb-4">Final Love Letter</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="glass-card-pink rounded-3xl p-6 md:p-8 max-w-lg w-full mb-8 premium-shadow"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            ✉️
          </motion.div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Sealed With Love</h2>
            <p className="text-sm text-muted-foreground">Just for you, Anjali</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner"
        >
          <p className="text-foreground/90 leading-relaxed mb-4 font-medium">
            Hey Anjali,
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            This wasn't about perfection, just honesty.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            I wanted you to feel appreciated today.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Whatever comes next, I'm glad this moment exists.
          </p>
        </motion.div>

        <div className="border-t border-border/50 pt-4">
          <p className="text-xs text-muted-foreground italic text-center mb-4">
            Made with love by Pinak 💕
          </p>
          <p className="text-xs text-center text-muted-foreground">
            ✨ Premium Valentine Template ✨
          </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn text-lg"
      >
        The Grand Finale 💝 →
      </motion.button>
    </div>
  );
};

export default PageFinalLetter;
