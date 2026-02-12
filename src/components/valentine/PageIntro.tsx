import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { introConfig } from "@/config/valentineConfig";

interface PageIntroProps {
  onNext: () => void;
}

const PageIntro = ({ onNext }: PageIntroProps) => {
  const [stage, setStage] = useState<"loading" | "video" | "ready">("loading");
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("video"), 500);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  if (stage === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full premium-gradient blur-2xl opacity-50 animate-pulse-glow" />
          <img
            src={introConfig.profileImage}
            alt="Welcome"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/50 shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {introConfig.loadingTitle}
          </h2>
          <p className="text-muted-foreground mb-8 font-script text-xl">
            {introConfig.loadingSubtitle}
          </p>

          <div className="w-64 md:w-80 h-3 glass-card rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full premium-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="text-sm text-muted-foreground">{progress}%</p>

          <div className="flex gap-3 justify-center mt-6">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (stage === "video") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl"
        >
          <h1 className="valentine-title text-center mb-4">{introConfig.videoTitle}</h1>
          <p className="valentine-subtitle text-center mb-6">{introConfig.videoSubtitle}</p>
          
          <div className="glass-card rounded-3xl overflow-hidden premium-shadow relative group">
            <video
              ref={videoRef}
              src={introConfig.video}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {isMuted ? "🔇" : "🔊"}
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setStage("ready")}
            className="premium-btn w-full mt-6"
          >
            {introConfig.videoContinueBtn}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl">💝</span>
        </motion.div>

        <p className="valentine-subtitle mb-2">{introConfig.welcomeSubtitle}</p>
        <h1 className="valentine-title mb-6">{introConfig.welcomeTitle}</h1>
        
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          {introConfig.welcomeMessage}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="premium-btn text-lg"
        >
          {introConfig.startBtn}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PageIntro;
