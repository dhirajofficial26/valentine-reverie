import { motion } from "framer-motion";

interface PageWhyYouMatterProps {
  onNext: () => void;
}

const qualities = [
  { icon: "❤️", title: "Genuine Heart", text: "You care in ways that feel real and unforced", delay: 0 },
  { icon: "🌸", title: "Calm Presence", text: "Being with you feels peaceful and grounding", delay: 0.1 },
  { icon: "✨", title: "Kind Nature", text: "Your kindness shows up naturally, without trying", delay: 0.2 },
  { icon: "⭐", title: "You Listen", text: "You pay attention in a way that feels rare", delay: 0.3 },
  { icon: "💪", title: "Soft Strength", text: "You're strong without needing to be loud about it", delay: 0.4 },
  { icon: "💎", title: "Just You", text: "Everything about you feels right to me", delay: 0.5 },
];

const PageWhyYouMatter = ({ onNext }: PageWhyYouMatterProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 relative">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 text-4xl opacity-20"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-40 left-10 text-3xl opacity-15"
      >
        ❋
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-script text-xl md:text-2xl text-muted-foreground mb-2"
        >
          especially today ✨
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="valentine-title"
        >
          Why You Matter
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground max-w-md mx-auto mt-4"
        >
          A glimpse into what makes you extraordinary to me
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl w-full mb-10">
        {qualities.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4 + q.delay, duration: 0.5, type: "spring" }}
            whileHover={{ 
              y: -10, 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
            className="glass-card rounded-2xl p-6 cursor-pointer transition-all"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
              style={{ 
                background: "linear-gradient(135deg, hsl(340, 80%, 85%), hsl(350, 75%, 80%))" 
              }}
            >
              <span className="text-3xl">{q.icon}</span>
            </motion.div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{q.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{q.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn text-lg"
      >
        Continue 💕 →
      </motion.button>
    </div>
  );
};

export default PageWhyYouMatter;
