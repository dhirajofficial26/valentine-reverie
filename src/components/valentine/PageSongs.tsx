import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicPlayer } from "./MusicProvider";

interface PageSongsProps {
  onNext: () => void;
}

const songs = [
  {
    id: "waalian",
    label: "SIDE A",
    song: "Waalian",
    artist: "Harnoor",
    subtitle: "Some feelings feel calm and deep 🥰",
    cardBg: "linear-gradient(180deg, hsl(35, 45%, 80%) 0%, hsl(30, 40%, 72%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
    reelColor: "hsl(35, 50%, 75%)",
  },
  {
    id: "lag-jaa-gale",
    label: "SIDE A",
    song: "Lag Jaa Gale",
    artist: "Sanam",
    subtitle: "Because closeness matters ♡",
    cardBg: "linear-gradient(180deg, hsl(150, 50%, 78%) 0%, hsl(150, 45%, 68%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
    reelColor: "hsl(150, 45%, 70%)",
  },
  {
    id: "bilionera",
    label: "SIDE A",
    song: "Bilionera",
    artist: "Otilia",
    subtitle: "When emotions say more than words 😍",
    cardBg: "linear-gradient(180deg, hsl(210, 50%, 78%) 0%, hsl(220, 45%, 68%) 100%)",
    innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
    reelColor: "hsl(210, 45%, 70%)",
  },
];

const CassetteTape = ({ song, index }: { song: typeof songs[0]; index: number }) => {
  const { playSong, stopSong, isSongPlaying, songProgress, songDuration } = useMusicPlayer();
  const isPlaying = isSongPlaying(song.id);
  const [displayTime, setDisplayTime] = useState("0:00");

  useEffect(() => {
    if (isPlaying && songProgress > 0) {
      const mins = Math.floor(songProgress / 60);
      const secs = Math.floor(songProgress % 60);
      setDisplayTime(`${mins}:${secs.toString().padStart(2, '0')}`);
    } else {
      setDisplayTime("0:00");
    }
  }, [isPlaying, songProgress]);

  const handleToggle = () => {
    if (isPlaying) {
      stopSong();
    } else {
      playSong(song.id);
    }
  };

  const progress = songDuration > 0 ? (songProgress / songDuration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.25, duration: 0.7, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -12, 
        scale: 1.03, 
        rotateY: 3,
        transition: { duration: 0.3 }
      }}
      className="relative cursor-pointer"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* Card shadow */}
      <motion.div 
        className="absolute -inset-2 rounded-[2rem] opacity-30 blur-xl"
        style={{ background: song.cardBg }}
        animate={isPlaying ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Main cassette card */}
      <div
        className="rounded-[1.75rem] p-6 shadow-2xl relative overflow-hidden border border-white/20"
        style={{ background: song.cardBg }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(135deg, transparent 30%, white 50%, transparent 70%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        
        {/* Corner screws with metallic effect */}
        {[
          "top-4 left-4",
          "top-4 right-4", 
          "bottom-4 left-4",
          "bottom-4 right-4"
        ].map((pos, i) => (
          <div 
            key={i}
            className={`absolute ${pos} w-3 h-3 rounded-full shadow-inner`}
            style={{
              background: "linear-gradient(135deg, #d4d4d4, #9a9a9a)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)"
            }}
          />
        ))}

        {/* Side A label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-[0.4em] text-black/35 uppercase">
            {song.label}
          </span>
        </div>

        {/* Inner pink section */}
        <motion.div
          className="rounded-2xl p-6 relative shadow-lg border border-white/30"
          style={{ background: song.innerBg }}
          animate={isPlaying ? { 
            boxShadow: [
              "0 4px 20px rgba(236, 72, 153, 0.2)",
              "0 8px 30px rgba(236, 72, 153, 0.4)",
              "0 4px 20px rgba(236, 72, 153, 0.2)"
            ]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {/* Song info */}
          <div className="text-center mb-5">
            <motion.h3 
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2"
              animate={isPlaying ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {song.song}
            </motion.h3>
            <p className="text-primary font-medium text-sm">{song.subtitle}</p>
          </div>

          {/* Cassette tape window */}
          <div className="bg-white/90 rounded-2xl p-5 flex items-center justify-between shadow-inner border border-black/5">
            {/* Left reel */}
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={isPlaying ? { duration: 1.5, repeat: Infinity, ease: "linear" } : {}}
              className="relative"
            >
              <div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md"
                style={{ 
                  background: `radial-gradient(circle, white 30%, ${song.reelColor} 70%)`,
                  border: "3px solid rgba(255,255,255,0.8)"
                }}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/80 border-2 border-black/10 flex items-center justify-center shadow-inner">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
              </div>
              {/* Reel spokes */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-0.5 h-2 bg-black/15 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-14px)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Tape with progress */}
            <div className="flex-1 mx-4 relative">
              <div className="h-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg relative overflow-hidden shadow-inner">
                {/* Progress indicator */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/40 to-primary/20"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
                
                {/* Tape shine animation */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "500%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Tape lines */}
                <div className="absolute inset-0 flex items-center justify-around opacity-20">
                  {Array(8).fill(0).map((_, i) => (
                    <div key={i} className="w-px h-full bg-white" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right reel */}
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={isPlaying ? { duration: 1.5, repeat: Infinity, ease: "linear" } : {}}
              className="relative"
            >
              <div 
                className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md"
                style={{ 
                  background: `radial-gradient(circle, white 30%, ${song.reelColor} 70%)`,
                  border: "3px solid rgba(255,255,255,0.8)"
                }}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/80 border-2 border-black/10 flex items-center justify-center shadow-inner">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
              </div>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-0.5 h-2 bg-black/15 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-14px)`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Heart icon - animated when playing */}
          <motion.div
            animate={isPlaying ? { 
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            } : { scale: [1, 1.1, 1] }}
            transition={{ duration: isPlaying ? 0.8 : 1.5, repeat: Infinity }}
            className="absolute bottom-4 right-4 text-primary/60 text-2xl"
          >
            {isPlaying ? "💕" : "♡"}
          </motion.div>
        </motion.div>

        {/* Play button and time */}
        <div className="flex items-center justify-between mt-5 px-3">
          <motion.span 
            className="text-sm font-bold text-black/60 bg-white/60 px-4 py-2 rounded-full shadow-inner"
            animate={isPlaying ? { opacity: [0.7, 1, 0.7] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {displayTime}
          </motion.span>
          
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
            style={{ 
              background: isPlaying 
                ? "linear-gradient(135deg, hsl(340, 85%, 50%), hsl(350, 80%, 55%))"
                : "linear-gradient(135deg, hsl(340, 85%, 60%), hsl(350, 80%, 65%))"
            }}
          >
            {/* Button shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"
              style={{ borderRadius: "inherit" }}
            />
            
            {/* Icon */}
            <motion.span 
              className="text-white text-2xl relative z-10"
              animate={isPlaying ? { scale: [1, 0.9, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {isPlaying ? "⏸" : "▶"}
            </motion.span>
            
            {/* Ripple effect when playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.button>

          <motion.span 
            className="text-xl"
            animate={isPlaying ? { 
              scale: [1, 1.4, 1],
              rotate: [0, 15, -15, 0]
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {isPlaying ? "❤️" : "♡"}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const PageSongs = ({ onNext }: PageSongsProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 relative">
      {/* Floating music notes - more animated */}
      {[
        { icon: "♪", left: "5%", top: "15%", delay: 0, size: "2xl" },
        { icon: "♫", left: "90%", top: "20%", delay: 1, size: "3xl" },
        { icon: "🎧", left: "80%", top: "35%", delay: 0.5, size: "xl" },
        { icon: "♪", left: "10%", top: "60%", delay: 1.5, size: "2xl" },
        { icon: "🎵", left: "85%", top: "70%", delay: 2, size: "xl" },
      ].map((note, i) => (
        <motion.div
          key={i}
          className={`absolute text-${note.size} text-primary/30`}
          style={{ left: note.left, top: note.top }}
          animate={{ 
            y: [0, -20, 0], 
            rotate: [-10, 10, -10],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3 + i * 0.5, 
            repeat: Infinity, 
            delay: note.delay 
          }}
        >
          {note.icon}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-script text-xl md:text-2xl text-muted-foreground mb-3"
        >
          Hope they make you smile
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold italic"
          style={{
            background: "linear-gradient(135deg, hsl(340, 85%, 50%), hsl(350, 80%, 55%), hsl(20, 75%, 55%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 4px 30px hsl(340 85% 50% / 0.3)"
          }}
        >
          Songs That Feel Like Valentine's Day
        </motion.h1>
      </motion.div>

      <div className="flex flex-col gap-10 max-w-lg w-full mb-12">
        {songs.map((song, i) => (
          <CassetteTape key={song.id} song={song} index={i} />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn text-lg px-10 py-4"
      >
        Continue 💕 →
      </motion.button>
    </div>
  );
};

export default PageSongs;
