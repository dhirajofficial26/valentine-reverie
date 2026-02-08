import { motion } from "framer-motion";

interface PageWhyYouMatterProps {
  onNext: () => void;
}

const qualities = [
  { icon: "❤️", title: "Genuine Heart", text: "You care in ways that feel real and unforced", gradient: "from-rose-400 to-pink-500" },
  { icon: "🌸", title: "Calm Presence", text: "Being with you feels peaceful and grounding", gradient: "from-pink-400 to-rose-400" },
  { icon: "✨", title: "Kind Nature", text: "Your kindness shows up naturally, without trying", gradient: "from-amber-300 to-orange-400" },
  { icon: "⭐", title: "You Listen", text: "You pay attention in a way that feels rare", gradient: "from-yellow-300 to-amber-400" },
  { icon: "💪", title: "Soft Strength", text: "You're strong without needing to be loud about it", gradient: "from-purple-400 to-pink-400" },
  { icon: "💎", title: "Just You", text: "Everything about you feels right to me", gradient: "from-blue-400 to-purple-400" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const PageWhyYouMatter = ({ onNext }: PageWhyYouMatterProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="valentine-subtitle mb-2">especially today ✨</p>
        <h1 className="valentine-title mb-4">Why You Matter</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          A glimpse into what makes you extraordinary to me
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full mb-8"
      >
        {qualities.map((q, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-2xl p-6 cursor-pointer transition-shadow hover:premium-shadow"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${q.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-2xl">{q.icon}</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{q.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{q.text}</p>
          </motion.div>
        ))}
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
        Continue 💕 →
      </motion.button>
    </div>
  );
};

export default PageWhyYouMatter;
