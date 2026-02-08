interface Page2Props {
  onNext: () => void;
  onRestart: () => void;
}

const Page2FinalLetter = ({ onNext, onRestart }: Page2Props) => {
  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">the grand finale...</p>
      <h1 className="valentine-title mb-8 text-center">One Last Valentine Thought</h1>

      <div className="valentine-card-bg rounded-2xl p-5 md:p-8 max-w-lg w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">✉️</span>
          <h2 className="text-xl font-bold text-foreground">Final Love Letter</h2>
        </div>

        <div className="bg-white/80 rounded-xl p-5 mb-4 text-foreground/90 leading-relaxed text-sm md:text-base">
          <p className="mb-3">Hey Anjali,</p>
          <p className="mb-3">
            This wasn't about perfection, just honesty.
          </p>
          <p className="mb-3">
            I wanted you to feel appreciated today.
          </p>
          <p>
            Whatever comes next, I'm glad this moment exists.
          </p>
        </div>

        <p className="text-xs text-muted-foreground mb-5 italic">
          This is a free demo only, made by pinak. For full customization, buy customization link
        </p>

        <div className="flex gap-3">
          <button onClick={onNext} className="valentine-btn flex-1">
            Seal It 📧 ❤️
          </button>
          <button onClick={onRestart} className="valentine-btn-secondary flex-1">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2FinalLetter;
