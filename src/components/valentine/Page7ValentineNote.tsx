import catPortrait from "@/assets/cat-portrait.jpg";

interface Page7Props {
  onNext: () => void;
}

const Page7ValentineNote = ({ onNext }: Page7Props) => {
  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">just because today feels right</p>
      <h1 className="valentine-title mb-8 text-center">A Valentine Note 💌</h1>

      <div className="valentine-card-bg rounded-2xl p-5 md:p-8 max-w-lg w-full mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">🐝</span>
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">❤️</span>
            <span className="font-script text-lg text-foreground">Hey love</span>
          </div>
          <img
            src={catPortrait}
            alt="Cat"
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
          />
        </div>

        <div className="bg-white/80 rounded-xl p-5 mb-4 text-foreground/90 leading-relaxed text-sm md:text-base">
          <p className="mb-3">
            I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments.
          </p>
          <p className="mb-3">
            I admire the way you care, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real.
          </p>
          <p className="mb-3">
            I appreciate your honesty, your kindness, and the way you show up as yourself.
          </p>
          <p className="mb-3">
            I don't know where this path leads, but I'd like to take a step forward and see where this connection can grow—at its own pace, in its own time.
          </p>
          <p>No pressure, no expectations—just something sincere, from the heart.</p>
        </div>

        <p className="text-right font-script text-lg text-foreground">Always ♡</p>
      </div>

      <button onClick={onNext} className="valentine-btn">
        Keep Going 🐝 →
      </button>
    </div>
  );
};

export default Page7ValentineNote;
