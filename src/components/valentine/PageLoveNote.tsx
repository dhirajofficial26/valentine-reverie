import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  onComplete,
  isActive
}: { 
  text: string; 
  delay?: number; 
  speed?: number;
  className?: string;
  onComplete?: () => void;
  isActive: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, isActive]);

  useEffect(() => {
    if (!hasStarted || !isActive) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, isComplete, onComplete, isActive]);

  if (!isActive && !isComplete) return null;

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
  const [completedParagraphs, setCompletedParagraphs] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  
  const paragraphs = [
    "I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments.",
    "I admire the way you care, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real.",
    "I appreciate your honesty, your kindness, and the way you show up as yourself.",
    "I don't know where this path leads, but I'd like to take a step forward and see where this connection can grow—at its own pace, in its own time.",
    "No pressure, no expectations—just something sincere, from the heart."
  ];

  // Start typing after initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Pen writing sound effect
  useEffect(() => {
    // Create audio element for pen writing sound
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3');
    audioRef.current.volume = 0.15;
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Play/pause sound based on typing state
  useEffect(() => {
    if (!audioRef.current) return;
    
    const allComplete = completedParagraphs.length === paragraphs.length;
    
    if (isTyping && !allComplete) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isTyping, completedParagraphs.length, paragraphs.length]);

  const handleParagraphComplete = (index: number) => {
    setCompletedParagraphs(prev => [...prev, index]);
    
    // Small delay before starting next paragraph
    if (index < paragraphs.length - 1) {
      setTimeout(() => {
        setCurrentParagraph(index + 1);
      }, 400);
    }
  };

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

        {/* Growing letter container */}
        <motion.div
          initial={{ minHeight: "60px" }}
          animate={{ 
            minHeight: `${60 + (completedParagraphs.length + 1) * 80}px`
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner overflow-hidden"
        >
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <AnimatePresence mode="sync">
              {paragraphs.map((text, index) => (
                <TypewriterText
                  key={index}
                  text={text}
                  delay={100}
                  speed={25}
                  className={index === paragraphs.length - 1 ? "font-medium" : ""}
                  isActive={index === currentParagraph}
                  onComplete={() => handleParagraphComplete(index)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-4">
          {paragraphs.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                backgroundColor: completedParagraphs.includes(index) 
                  ? "hsl(var(--primary))" 
                  : index === currentParagraph 
                    ? "hsl(var(--primary) / 0.5)"
                    : "hsl(var(--muted))"
              }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: completedParagraphs.length === paragraphs.length ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-right font-script text-3xl text-primary"
        >
          Always ♡
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: completedParagraphs.length === paragraphs.length ? 1 : 0.5,
          y: 0 
        }}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: completedParagraphs.length === paragraphs.length ? 1.05 : 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={completedParagraphs.length !== paragraphs.length}
        className="premium-btn text-lg disabled:cursor-not-allowed"
      >
        Keep Going 🐝 →
      </motion.button>
    </div>
  );
};

export default PageLoveNote;
