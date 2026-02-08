import { motion } from "framer-motion";
import catPortrait from "@/assets/cat-portrait.jpg";

interface PageLoveNoteProps {
  onNext: () => void;
}

const PageLoveNote = ({ onNext }: PageLoveNoteProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <p className="valentine-subtitle mb-2">just because today feels right</p>
        <h1 className="valentine-title mb-4">A Love Note 💌</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card-pink rounded-3xl p-6 md:p-8 max-w-lg w-full mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl"
          >
            🐝
          </motion.span>
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <span className="font-script text-xl text-foreground">Hey love</span>
          </div>
          <img
            src={catPortrait}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover border-3 border-white/50 shadow-lg"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 text-foreground/90 leading-relaxed space-y-4 shadow-inner"
        >
          <p>
            I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments.
          </p>
          <p>
            I admire the way you care, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real.
          </p>
          <p>
            I appreciate your honesty, your kindness, and the way you show up as yourself.
          </p>
          <p>
            I don't know where this path leads, but I'd like to take a step forward and see where this connection can grow—at its own pace, in its own time.
          </p>
          <p className="font-medium">
            No pressure, no expectations—just something sincere, from the heart.
          </p>
        </motion.div>

        <p className="text-right font-script text-2xl text-primary">
          Always ♡
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn"
      >
        Keep Going 🐝 →
      </motion.button>
    </div>
  );
};

export default PageLoveNote;
