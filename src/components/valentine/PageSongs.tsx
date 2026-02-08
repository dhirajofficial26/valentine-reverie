import { motion } from "framer-motion";

interface PageSongsProps {
  onNext: () => void;
}

const songs = [
  {
    bg: "linear-gradient(135deg, hsl(35, 55%, 70%), hsl(25, 50%, 55%))",
    label: "SIDE A",
    song: "Waalian",
    artist: "Harnoor",
    subtitle: "Some feelings feel calm and deep 😌",
  },
  {
    bg: "linear-gradient(135deg, hsl(140, 45%, 55%), hsl(150, 40%, 45%))",
    label: "SIDE A",
    song: "Lag Jaa Gale",
    artist: "Sanam",
    subtitle: "Because closeness matters ♡",
  },
  {
    bg: "linear-gradient(135deg, hsl(220, 55%, 60%), hsl(230, 50%, 50%))",
    label: "SIDE A",
    song: "Bilionera",
    artist: "Otilia",
    subtitle: "When emotions say more than words 😍",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const PageSongs = ({ onNext }: PageSongsProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="valentine-subtitle mb-2">Hope they make you smile 🎵</p>
        <h1 className="valentine-title mb-4">Our Songs</h1>
        <p className="text-muted-foreground">Songs that feel like Valentine's Day</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-5 max-w-md w-full mb-8"
      >
        {songs.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-2xl p-5 cursor-pointer shadow-xl transition-shadow hover:shadow-2xl"
            style={{ background: s.bg }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase bg-black/20 px-3 py-1 rounded-full">
                {s.label}
              </span>
              <span className="text-white/60 text-sm">{s.artist}</span>
            </div>

            <div className="cassette-window mb-4">
              <div className="cassette-reel" />
              <div className="flex-1 h-[2px] bg-white/30 mx-3 rounded relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white/60 rounded"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ width: "30%" }}
                />
              </div>
              <div className="cassette-reel" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-1">{s.song}</h3>
            <p className="text-white/80 text-sm mb-4">{s.subtitle}</p>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white text-lg hover:bg-white/35 transition-colors shadow-lg"
              >
                ▶
              </motion.button>
              <div className="flex-1">
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-white/60 rounded-full" />
                </div>
              </div>
              <span className="text-white/60 text-sm font-medium">0:00</span>
            </div>
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
        Continue → 💕
      </motion.button>
    </div>
  );
};

export default PageSongs;
