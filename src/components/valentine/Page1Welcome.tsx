interface Page1Props {
  onNext: () => void;
}

const Page1Welcome = ({ onNext }: Page1Props) => {
  return (
    <div className="page-enter flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">like grand finale...</p>
      <h1 className="valentine-title mb-8 text-center">One Last Valentine Thought</h1>

      <div className="valentine-card-bg rounded-2xl p-6 md:p-8 max-w-sm w-full text-center">
        <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 animate-pulse-heart"
          style={{ background: "linear-gradient(135deg, hsl(330, 100%, 56%), hsl(340, 80%, 70%))" }}>
          <span className="text-4xl">❤️</span>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-1">Sent With Care</h2>
        <p className="text-muted-foreground text-sm mb-4">Just For You</p>

        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="text-sm">❤️</span>
          ))}
        </div>

        <p className="font-script text-lg text-foreground mb-1">Always ♡</p>
        <p className="text-xs text-muted-foreground mb-5">Sunday, February 8, 2026</p>

        <button onClick={onNext} className="valentine-btn w-full">
          See Again 🐝 ↻
        </button>
      </div>
    </div>
  );
};

export default Page1Welcome;
