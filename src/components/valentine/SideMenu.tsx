import { motion, AnimatePresence } from "framer-motion";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: number) => void;
  currentPage: number;
}

const menuItems = [
  { page: 0, icon: "🎬", label: "Welcome" },
  { page: 1, icon: "🎮", label: "Know Me Better" },
  { page: 2, icon: "✨", label: "Why You Matter" },
  { page: 3, icon: "📸", label: "Sweet Moments" },
  { page: 4, icon: "🧩", label: "Memory Game" },
  { page: 5, icon: "🎵", label: "Our Songs" },
  { page: 6, icon: "💌", label: "Love Note" },
  { page: 7, icon: "📜", label: "Final Letter" },
  { page: 8, icon: "💕", label: "Be My Valentine" },
];

const SideMenu = ({ open, onClose, onNavigate, currentPage }: SideMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 z-50 glass-card-pink shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground">Journey 💕</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-2xl text-foreground/70 hover:text-primary transition-colors"
              >
                ×
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose();
                  }}
                  className={`text-left px-4 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 font-medium ${
                    currentPage === item.page
                      ? "glass-card premium-shadow text-primary"
                      : "hover:glass-card text-foreground/80"
                  }`}
                >
                  <span className="text-xl w-8">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                  {currentPage === item.page && (
                    <span className="ml-auto text-xs">●</span>
                  )}
                </motion.button>
              ))}
            </nav>

            <div className="pt-4 border-t border-border/50 mt-4">
              <p className="text-xs text-muted-foreground text-center font-script text-lg">
                Made with ❤️ for you
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
