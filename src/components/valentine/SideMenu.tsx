interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: number) => void;
  currentPage: number;
}

const menuItems = [
  { page: 0, icon: "🏠", label: "Start" },
  { page: 1, icon: "💌", label: "Final Letter" },
  { page: 2, icon: "✨", label: "Why You Matter" },
  { page: 3, icon: "📸", label: "Random Thoughts" },
  { page: 4, icon: "🎮", label: "Memory Game" },
  { page: 5, icon: "🎵", label: "Songs" },
  { page: 6, icon: "📝", label: "Valentine Note" },
  { page: 7, icon: "❤️", label: "Will You Be My Valentine?" },
];

const SideMenu = ({ open, onClose, onNavigate, currentPage }: SideMenuProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-72 valentine-card-solid shadow-2xl p-6 flex flex-col animate-slide-in-right">
        <button
          onClick={onClose}
          className="self-end text-3xl text-foreground/70 hover:text-primary transition-colors mb-6"
        >
          ×
        </button>
        <h3 className="font-script text-2xl text-primary mb-6">Navigate 💕</h3>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                onClose();
              }}
              className={`text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 font-medium ${
                currentPage === item.page
                  ? "bg-primary/20 text-primary"
                  : "hover:bg-primary/10 text-foreground/80"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
