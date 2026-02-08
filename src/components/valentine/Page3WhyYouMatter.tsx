interface Page3Props {
  onNext: () => void;
}

const qualities = [
  { icon: "❤️", title: "Genuine Heart", text: "You care in ways that feel real and unforced" },
  { icon: "🌸", title: "Calm Presence", text: "Being with you feels peaceful and grounding" },
  { icon: "♡", title: "Kind Nature", text: "Your kindness shows up naturally, without trying" },
  { icon: "⭐", title: "You Listen", text: "You pay attention in a way that feels rare" },
  { icon: "🍌", title: "Soft Strength", text: "You're strong without needing to be loud about it" },
  { icon: "🎮", title: "Just You", text: "Everything about you feels right to me" },
];

const Page3WhyYouMatter = ({ onNext }: Page3Props) => {
  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">especially today</p>
      <h1 className="valentine-title mb-3 text-center">Why You Matter</h1>
      <p className="text-muted-foreground text-center text-sm mb-8 max-w-md">
        A glimpse into what makes you extraordinary to me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg w-full mb-8">
        {qualities.map((q, i) => (
          <div
            key={i}
            className="valentine-card-bg rounded-xl p-5 card-hover text-center"
          >
            <div
              className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3"
              style={{ background: "linear-gradient(135deg, hsl(340, 80%, 90%), hsl(330, 70%, 85%))" }}
            >
              <span className="text-xl">{q.icon}</span>
            </div>
            <h3 className="font-bold text-foreground mb-1">{q.title}</h3>
            <p className="text-muted-foreground text-sm">{q.text}</p>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="valentine-btn">
        Continue 💕
      </button>
    </div>
  );
};

export default Page3WhyYouMatter;
