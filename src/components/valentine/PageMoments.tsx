import { motion } from "framer-motion";
import catsTogether from "@/assets/cats-together.jpg";
import dogFlowers from "@/assets/dog-flowers.jpg";
import catGift from "@/assets/cat-gift.jpg";

interface PageMomentsProps {
  onNext: () => void;
}

const photos = [
  { src: catsTogether, caption: "Us together? 😊", date: "Always", rotate: -4 },
  { src: dogFlowers, caption: "I brought you flowers ❤️", date: "Every day", rotate: 3 },
  { src: catGift, caption: "A surprise gift for you 🎁", date: "With love", rotate: -2 },
];

const PageMoments = ({ onNext }: PageMomentsProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="valentine-subtitle mb-2">the kind that matter 📸</p>
        <h1 className="valentine-title mb-4">Sweet Moments</h1>
        <p className="text-muted-foreground">
          Simple thoughts, genuine feelings ♡
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mb-8 items-center justify-center">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ rotate: 0, scale: 1.08, y: -15 }}
            className="polaroid cursor-pointer"
            style={{ "--rotate": `${photo.rotate}deg` } as React.CSSProperties}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-cover"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center px-4">
              <p className="font-script text-lg text-foreground/80 mb-1">
                {photo.caption}
              </p>
              <p className="text-xs text-muted-foreground">{photo.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="premium-btn"
      >
        Next Memory 💝 →
      </motion.button>
    </div>
  );
};

export default PageMoments;
