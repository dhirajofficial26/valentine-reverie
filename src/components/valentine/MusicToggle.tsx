// Music toggle button component
import { motion, AnimatePresence } from "framer-motion";
import { useMusicPlayer } from "./MusicProvider";

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useMusicPlayer();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
      whileTap={{ scale: 0.85 }}
      onClick={toggleMusic}
      className="fixed bottom-20 right-4 z-50 w-16 h-16 rounded-full flex items-center justify-center"
      style={{
        background: isPlaying 
          ? "linear-gradient(135deg, hsl(340, 85%, 55%), hsl(350, 80%, 65%))"
          : "linear-gradient(135deg, hsl(340, 30%, 75%), hsl(350, 25%, 80%))",
        boxShadow: isPlaying 
          ? "0 8px 32px hsl(340 85% 55% / 0.4), 0 4px 16px hsl(350 80% 60% / 0.3)"
          : "0 4px 16px hsl(340 30% 60% / 0.2)"
      }}
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {/* Cute vinyl disc design */}
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
        className="relative w-12 h-12"
      >
        {/* Vinyl disc */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: isPlaying 
              ? "conic-gradient(from 0deg, #1a1a1a, #333, #1a1a1a, #333, #1a1a1a)"
              : "#444"
          }}
        />
        
        {/* Vinyl grooves */}
        <div className="absolute inset-1 rounded-full border border-white/10" />
        <div className="absolute inset-2 rounded-full border border-white/10" />
        <div className="absolute inset-3 rounded-full border border-white/5" />
        
        {/* Center label */}
        <div 
          className="absolute inset-0 m-auto w-5 h-5 rounded-full flex items-center justify-center"
          style={{
            background: isPlaying 
              ? "linear-gradient(135deg, hsl(340, 85%, 60%), hsl(20, 80%, 60%))"
              : "hsl(340, 40%, 70%)"
          }}
        >
          <motion.span 
            className="text-white text-[10px]"
            animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {isPlaying ? "♫" : "♪"}
          </motion.span>
        </div>
      </motion.div>
      
      {/* Animated sound waves when playing */}
      <AnimatePresence>
        {isPlaying && (
          <>
            {/* Sound wave bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -left-2 top-1/2 -translate-y-1/2 flex gap-0.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-white rounded-full"
                  animate={{ height: ["8px", "16px", "8px"] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
            
            {/* Musical notes floating */}
            <motion.div
              className="absolute -top-3 -right-1 text-lg"
              initial={{ opacity: 0, y: 10, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: [10, -15, -30], 
                scale: [0, 1, 0.5],
                x: [0, 5, 10]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute -top-2 left-0 text-sm"
              initial={{ opacity: 0, y: 10, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: [10, -20, -35], 
                scale: [0, 1, 0.5],
                x: [0, -5, -10]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ♫
            </motion.div>
            
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/50"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            />
          </>
        )}
      </AnimatePresence>
      
      {/* Subtle heart when paused */}
      {!isPlaying && (
        <motion.div
          className="absolute -top-1 -right-1 text-xs"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💕
        </motion.div>
      )}
    </motion.button>
  );
};

export default MusicToggle;
