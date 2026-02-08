import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageQuizProps {
  onNext: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  emoji: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's my favorite food?",
    options: ["Pizza", "Biryani", "Pasta", "Momos"],
    correct: 1,
    emoji: "🍕",
    category: "Favorites",
  },
  {
    id: 2,
    question: "When did we first meet?",
    options: ["January 2024", "February 2024", "March 2024", "December 2023"],
    correct: 0,
    emoji: "📅",
    category: "Our Story",
  },
  {
    id: 3,
    question: "What's my favorite color?",
    options: ["Blue", "Pink", "Purple", "Black"],
    correct: 2,
    emoji: "🎨",
    category: "Favorites",
  },
  {
    id: 4,
    question: "What do I love doing on weekends?",
    options: ["Gaming", "Reading", "Watching movies", "Sleeping"],
    correct: 2,
    emoji: "🎮",
    category: "Lifestyle",
  },
  {
    id: 5,
    question: "What's my dream travel destination?",
    options: ["Paris", "Maldives", "Switzerland", "Japan"],
    correct: 3,
    emoji: "✈️",
    category: "Dreams",
  },
  {
    id: 6,
    question: "What makes me smile the most?",
    options: ["Cute animals", "Good food", "You 💕", "Music"],
    correct: 2,
    emoji: "😊",
    category: "Happiness",
  },
];

const PageQuiz = ({ onNext }: PageQuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const current = questions[currentQ];
  const isLast = currentQ === questions.length - 1;
  const progress = ((currentQ + 1) / questions.length) * 100;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === current.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      setShowResult(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    let emoji = "";

    if (percentage >= 80) {
      message = "You know me so well! 💕";
      emoji = "🥰";
    } else if (percentage >= 50) {
      message = "Not bad! We're learning about each other 😊";
      emoji = "😊";
    } else {
      message = "Let's spend more time together! 💝";
      emoji = "🤗";
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-pink rounded-3xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-7xl mb-6"
          >
            {emoji}
          </motion.div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Quiz Complete!
          </h2>

          <div className="glass-card rounded-2xl p-6 mb-6">
            <p className="text-5xl font-bold text-primary mb-2">{score}/{questions.length}</p>
            <p className="text-muted-foreground">Correct Answers</p>
          </div>

          <p className="text-lg text-foreground mb-8">{message}</p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="premium-btn w-full"
          >
            Continue Journey 💕 →
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <p className="valentine-subtitle text-center mb-2">Let's see how well...</p>
        <h1 className="valentine-title text-center mb-6">You Know Me 💕</h1>

        {/* Progress */}
        <div className="glass-card rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Question {currentQ + 1} of {questions.length}</span>
            <span className="text-sm text-primary font-bold">{current.category}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full premium-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="glass-card-pink rounded-3xl p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{current.emoji}</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {current.question}
              </h2>
            </div>

            <div className="space-y-3">
              {current.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                  onClick={() => handleSelect(index)}
                  className={`quiz-option w-full text-left ${
                    selected === index ? "selected" : ""
                  } ${
                    answered && index === current.correct ? "correct" : ""
                  } ${
                    answered && selected === index && index !== current.correct ? "wrong" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      answered && index === current.correct
                        ? "bg-green-500 text-white"
                        : answered && selected === index
                        ? "bg-red-500 text-white"
                        : "bg-primary/20 text-primary"
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium text-foreground">{option}</span>
                    {answered && index === current.correct && (
                      <span className="ml-auto text-green-600">✓</span>
                    )}
                    {answered && selected === index && index !== current.correct && (
                      <span className="ml-auto text-red-500">✗</span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {answered && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="premium-btn w-full"
          >
            {isLast ? "See Results 🎉" : "Next Question →"}
          </motion.button>
        )}

        {/* Score indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index < currentQ
                  ? "bg-primary"
                  : index === currentQ
                  ? "bg-primary w-6"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PageQuiz;
