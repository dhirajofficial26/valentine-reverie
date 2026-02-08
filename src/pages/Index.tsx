import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/valentine/FloatingHearts";
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
    <div className="valentine-gradient min-h-screen relative overflow-x-hidden">
      <FloatingHearts />

      {/* Premium badge */}
      <div className="fixed top-4 left-4 z-40">
        <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-foreground/80">
          <span className="text-lg">💝</span>
          <span className="hidden md:inline">Valentine Special</span>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl shadow-lg hover:premium-shadow transition-shadow"
      >
        ☰
      </motion.button>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Page indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "w-6 bg-primary"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
