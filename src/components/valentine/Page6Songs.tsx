interface Page6Props {
  onNext: () => void;
}

const songs = [
  {
    bg: "linear-gradient(135deg, hsl(35, 50%, 75%), hsl(30, 40%, 65%))",
    label: "SIDE A",
    song: "Waalian",
    subtitle: "Some feelings feel calm and deep 😌",
  },
  {
    bg: "linear-gradient(135deg, hsl(140, 40%, 65%), hsl(150, 35%, 55%))",
    label: "SIDE A",
    song: "Lag Jaa Gale",
    subtitle: "Because closeness matters ♡",
  },
  {
    bg: "linear-gradient(135deg, hsl(210, 50%, 70%), hsl(220, 45%, 60%))",
    label: "SIDE A",
    song: "Bilionera",
    subtitle: "When emotions say more than words 😍",
  },
];

const Page6Songs = ({ onNext }: Page6Props) => {
  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">Hope they make you smile</p>
      <h1 className="valentine-title mb-8 text-center">Songs That Feel Like Valentine's Day</h1>

      <div className="flex flex-col gap-6 max-w-md w-full mb-8">
        {songs.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 card-hover shadow-lg"
            style={{ background: s.bg }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-widest text-white/80 uppercase">{s.label}</span>
            </div>

            <div className="cassette-window mb-4">
              <div className="cassette-reel" />
              <div className="flex-1 h-[2px] bg-white/20 mx-2 rounded" />
              <div className="cassette-reel" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{s.song}</h3>
            <p className="text-white/80 text-sm mb-3">{s.subtitle}</p>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                ▶
              </button>
              <span className="text-white/60 text-sm">0:00</span>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="valentine-btn">
        Continue →
      </button>
    </div>
  );
};

export default Page6Songs;
