import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import catPortrait from "@/assets/cat-portrait.jpg";

interface PageLoveNoteProps {
  onNext: () => void;
}

// Typewriter component for smooth character-by-character animation
const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 30,
  className = "",
  onComplete
}: { 
  text: string; 
  delay?: number; 
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, isComplete, onComplete]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: hasStarted ? 1 : 0 }}
      className={className}
    >
      {displayedText}
      {hasStarted && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 align-middle"
        />
      )}
    </motion.p>
  );
};

const PageLoveNote = ({ onNext }: PageLoveNoteProps) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  
  const paragraphs = [
    "I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments.",
    "I admire the way you care, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real.",
    "I appreciate your honesty, your kindness, and the way you show up as yourself.",
    "I don't know where this path leads, but I'd like to take a step forward and see where this connection can grow—at its own pace, in its own time.",
    "No pressure, no expectations—just something sincere, from the heart."
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 relative">
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 text-3xl opacity-30"
      >
        💌
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-28 right-12 text-2xl opacity-25"
      >
        ✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-script text-xl md:text-2xl text-muted-foreground mb-2"
        >
          just because today feels right
        </motion.p>
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="valentine-title"
        >
          A Love Note 💌
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        className="glass-card-pink rounded-3xl p-6 md:p-8 max-w-lg w-full mb-8 relative overflow-hidden"
      >
        {/* Decorative corner hearts */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-2 left-2 text-primary/20 text-xl"
        >
          ♡
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute top-2 right-2 text-primary/20 text-xl"
        >
          ♡
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between mb-6"
        >
          <motion.span
            animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-4xl"
          >
            🐝
          </motion.span>
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              ❤️
            </motion.span>
            <span className="font-script text-2xl text-foreground">Hey love</span>
          </div>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={catPortrait}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover border-3 border-white/50 shadow-lg cursor-pointer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner"
        >
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            {paragraphs.map((text, index) => (
              <TypewriterText
                key={index}
                text={text}
                delay={800 + (index * 100)} // Start after card appears, small gap between paragraphs starting
                speed={index === currentParagraph ? 25 : 15} // Current paragraph types slower, others catch up
                className={index === paragraphs.length - 1 ? "font-medium" : ""}
                onComplete={() => {
                  if (index === currentParagraph && currentParagraph < paragraphs.length - 1) {
                    setCurrentParagraph(index + 1);
                  }
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-right font-script text-3xl text-primary"
        >
          Always ♡
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn text-lg"
      >
        Keep Going 🐝 →
      </motion.button>
    </div>
  );
};

export default PageLoveNote;
