import { useState } from "react";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import SideMenu from "@/components/valentine/SideMenu";
import Page1Welcome from "@/components/valentine/Page1Welcome";
import Page2FinalLetter from "@/components/valentine/Page2FinalLetter";
import Page3WhyYouMatter from "@/components/valentine/Page3WhyYouMatter";
import Page4RandomThoughts from "@/components/valentine/Page4RandomThoughts";
import Page5MemoryGame from "@/components/valentine/Page5MemoryGame";
import Page6Songs from "@/components/valentine/Page6Songs";
import Page7ValentineNote from "@/components/valentine/Page7ValentineNote";
import Page8WillYou from "@/components/valentine/Page8WillYou";
import Page9Loading from "@/components/valentine/Page9Loading";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => goTo(currentPage + 1);
  const restart = () => goTo(0);

  return (
    <div className="valentine-gradient min-h-screen relative overflow-x-hidden">
      <FloatingHearts />

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-40 w-10 h-10 rounded-full valentine-card-bg flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform"
      >
        ☰
      </button>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={goTo}
        currentPage={currentPage}
      />

      <div className="relative z-10">
        {currentPage === 0 && <Page1Welcome onNext={next} />}
        {currentPage === 1 && <Page2FinalLetter onNext={next} onRestart={restart} />}
        {currentPage === 2 && <Page3WhyYouMatter onNext={next} />}
        {currentPage === 3 && <Page4RandomThoughts onNext={next} />}
        {currentPage === 4 && <Page5MemoryGame onNext={next} />}
        {currentPage === 5 && <Page6Songs onNext={next} />}
        {currentPage === 6 && <Page7ValentineNote onNext={next} />}
        {currentPage === 7 && <Page8WillYou onNext={next} />}
        {currentPage === 8 && <Page9Loading onRestart={restart} />}
      </div>
    </div>
  );
};

export default Index;
