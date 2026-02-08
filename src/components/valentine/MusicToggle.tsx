import { motion } from "framer-motion";
import { useMusicPlayer } from "./MusicProvider";

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useMusicPlayer();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMusic}
      className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full glass-card-pink flex items-center justify-center shadow-xl premium-shadow"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
        className="text-2xl"
      >
        {isPlaying ? "🎵" : "🔇"}
      </motion.div>
      
      {/* Pulsing ring when playing */}
      {isPlaying && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{ scale: [1, 1.3], opacity: [0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </>
      )}
    </motion.button>
  );
};

export default MusicToggle;
