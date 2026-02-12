import { motion } from "framer-motion";
import { momentsConfig } from "@/config/valentineConfig";

interface PageMomentsProps {
  onNext: () => void;
}

const PageMoments = ({ onNext }: PageMomentsProps) => {
  const { photos } = momentsConfig;

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 relative">
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-24 left-8 text-3xl opacity-30">📷</motion.div>
      <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute top-32 right-12 text-2xl opacity-25">✨</motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-script text-xl md:text-2xl text-muted-foreground mb-2">
          {momentsConfig.subtitle}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }} className="valentine-title">
          {momentsConfig.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground mt-4">
          {momentsConfig.description}
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6 mb-10 items-center justify-center">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: photo.rotate, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ rotate: 0, scale: 1.1, y: -20, zIndex: 10, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
            className="polaroid cursor-pointer relative group"
          >
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-100/80 opacity-70 rotate-[-2deg]"
            />
            <motion.img whileHover={{ scale: 1.02 }} src={photo.src} alt={photo.caption} className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] object-cover" />
            <div className="absolute bottom-4 left-0 right-0 text-center px-4">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.15 }} className="font-script text-xl text-foreground/80 mb-1">
                {photo.caption}
              </motion.p>
              <p className="text-xs text-muted-foreground">{photo.date}</p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0 }} whileHover={{ opacity: 1, scale: 1 }} className="absolute top-4 right-4 text-2xl">💕</motion.div>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={onNext} className="premium-btn text-lg"
      >
        {momentsConfig.continueBtn}
      </motion.button>
    </div>
  );
};

export default PageMoments;
