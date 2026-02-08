import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MusicProvider } from "@/components/valentine/MusicProvider";
import MusicToggle from "@/components/valentine/MusicToggle";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import FallingPetals from "@/components/valentine/FallingPetals";
import SideMenu from "@/components/valentine/SideMenu";
import PageIntro from "@/components/valentine/PageIntro";
import PageQuiz from "@/components/valentine/PageQuiz";
import PageWhyYouMatter from "@/components/valentine/PageWhyYouMatter";
import PageMoments from "@/components/valentine/PageMoments";
import PageMemoryGame from "@/components/valentine/PageMemoryGame";
import PageSongs from "@/components/valentine/PageSongs";
import PageLoveNote from "@/components/valentine/PageLoveNote";
import PageFinalLetter from "@/components/valentine/PageFinalLetter";
import PageFinale from "@/components/valentine/PageFinale";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => goTo(currentPage + 1);
  const restart = () => goTo(0);

  const pages = [
    <PageIntro key="intro" onNext={next} />,
    <PageQuiz key="quiz" onNext={next} />,
    <PageWhyYouMatter key="why" onNext={next} />,
    <PageMoments key="moments" onNext={next} />,
    <PageMemoryGame key="memory" onNext={next} />,
    <PageSongs key="songs" onNext={next} />,
    <PageLoveNote key="note" onNext={next} />,
    <PageFinalLetter key="letter" onNext={next} />,
    <PageFinale key="finale" onRestart={restart} />,
  ];

  return (
    <MusicProvider>
      <div className="valentine-gradient min-h-screen relative overflow-x-hidden">
        <FloatingHearts />
        <FallingPetals />

        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-40"
        >
          <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-foreground/80 shadow-lg">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              💝
            </motion.span>
            <span className="hidden md:inline font-script text-base">Valentine Special</span>
          </div>
        </motion.div>

        {/* Hamburger Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(true)}
          className="fixed top-4 right-4 z-40 w-12 h-12 rounded-full glass-card-pink flex items-center justify-center text-xl shadow-xl hover:premium-shadow transition-shadow"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ☰
          </motion.span>
        </motion.button>

        {/* Music Toggle Button */}
        <MusicToggle />

        <SideMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={goTo}
          currentPage={currentPage}
        />

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, type: "spring", damping: 20 }}
            className="relative z-10"
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>

        {/* Page indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="glass-card rounded-full px-5 py-3 flex items-center gap-2 shadow-lg">
            {pages.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "w-6 h-3 bg-primary shadow-md"
                    : "w-3 h-3 bg-foreground/25 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </MusicProvider>
  );
};

export default Index;
