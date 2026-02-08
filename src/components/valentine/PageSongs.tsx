import { useState } from "react";
import { motion } from "framer-motion";

interface PageSongsProps {
  onNext: () => void;
}

const songs = [
  {
    label: "SIDE A",
    song: "Waalian",
    artist: "Harnoor",
    subtitle: "Some feelings feel calm and deep 🥰",
    cardBg: "linear-gradient(180deg, hsl(35, 40%, 78%) 0%, hsl(30, 35%, 70%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 70%, 92%) 0%, hsl(340, 60%, 88%) 100%)",
  },
  {
    label: "SIDE A",
    song: "Lag Jaa Gale",
    artist: "Sanam",
    subtitle: "Because closeness matters ♡",
    cardBg: "linear-gradient(180deg, hsl(150, 45%, 75%) 0%, hsl(150, 40%, 65%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 70%, 92%) 0%, hsl(340, 60%, 88%) 100%)",
  },
  {
    label: "SIDE A",
    song: "Bilionera",
    artist: "Otilia",
    subtitle: "When emotions say more than words 😍",
    cardBg: "linear-gradient(180deg, hsl(210, 45%, 75%) 0%, hsl(220, 40%, 65%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 70%, 92%) 0%, hsl(340, 60%, 88%) 100%)",
  },
];

const CassetteTape = ({ song, index }: { song: typeof songs[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      whileHover={{ y: -8, scale: 1.02, rotateY: 2 }}
      className="relative cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Main cassette card */}
      <div
        className="rounded-3xl p-5 shadow-2xl relative overflow-hidden"
        style={{ background: song.cardBg }}
      >
        {/* Corner screws */}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-black/20" />
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-black/20" />
        <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-black/20" />
        <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-black/20" />

        {/* Side A label */}
        <div className="text-center mb-3">
          <span className="text-xs font-bold tracking-[0.3em] text-black/40 uppercase">
            {song.label}
          </span>
        </div>

        {/* Inner pink section */}
        <div
          className="rounded-2xl p-5 relative"
          style={{ background: song.innerBg }}
        >
          {/* Song info */}
          <div className="text-center mb-4">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
              {song.song}
            </h3>
            <p className="text-primary text-sm font-medium">{song.subtitle}</p>
          </div>

          {/* Cassette tape window */}
          <div className="bg-white/80 rounded-xl p-4 flex items-center justify-between shadow-inner">
            {/* Left reel */}
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={isPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : {}}
              className="relative"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-amber-200 bg-white flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                </div>
              </div>
              {/* Reel teeth */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-1 h-2 bg-amber-300/60 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-10px)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Tape */}
            <div className="flex-1 mx-3 h-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded relative overflow-hidden">
              {isPlaying && (
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>

            {/* Right reel */}
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={isPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : {}}
              className="relative"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-amber-200 bg-white flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                </div>
              </div>
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-1 h-2 bg-amber-300/60 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-10px)`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Heart icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-3 right-3 text-primary/40 text-xl"
          >
            ♡
          </motion.div>
        </div>

        {/* Play button and time */}
        <div className="flex items-center justify-between mt-4 px-2">
          <span className="text-sm font-medium text-black/50 bg-white/50 px-3 py-1 rounded-full">
            0:00
          </span>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style={{ background: "linear-gradient(135deg, hsl(340, 85%, 55%), hsl(350, 80%, 60%))" }}
          >
            <span className="text-white text-xl ml-1">
              {isPlaying ? "⏸" : "▶"}
            </span>
          </motion.button>

          <span className="text-sm text-black/30">♡</span>
        </div>
      </div>
    </motion.div>
  );
};

const PageSongs = ({ onNext }: PageSongsProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Floating music notes */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 text-2xl text-muted-foreground/40"
      >
        ♪
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-16 text-3xl text-muted-foreground/30"
      >
        ♫
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        className="absolute top-40 right-1/4 text-xl text-primary/20"
      >
        🎧
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-script text-xl md:text-2xl text-muted-foreground mb-2"
        >
          Hope they make you smile
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold italic"
          style={{
            background: "linear-gradient(135deg, hsl(340, 85%, 50%), hsl(350, 80%, 55%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Songs That Feel Like Valentine's Day
        </motion.h1>
      </motion.div>

      <div className="flex flex-col gap-8 max-w-md w-full mb-10">
        {songs.map((song, i) => (
          <CassetteTape key={i} song={song} index={i} />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
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

export default PageSongs;
