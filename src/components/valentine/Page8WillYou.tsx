import bunnyImg from "@/assets/bunny.png";

interface Page8Props {
  onNext: () => void;
}

const Page8WillYou = ({ onNext }: Page8Props) => {
  return (
    <div className="page-enter flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">Hey i have made something special for you...</p>
      <h1 className="valentine-title mb-8 text-center">Will You Be My Valentine ? 💕</h1>

      <div
        className="rounded-2xl p-6 md:p-8 max-w-md w-full relative overflow-hidden shadow-xl"
        style={{ background: "linear-gradient(135deg, hsl(270, 40%, 80%), hsl(280, 50%, 75%))" }}
      >
        {/* Browser dots */}
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        <p className="text-white/90 text-center mb-4 leading-relaxed">
          A little reminder of what this day feels like with you.
        </p>

        <p className="text-white/70 text-center text-sm mb-6">
          Tap below when you're ready 🐝!
        </p>

        <button onClick={onNext} className="valentine-btn w-full text-lg">
          Open This 💝 →
        </button>

        <img
          src={bunnyImg}
          alt="Bunny"
          className="absolute bottom-2 left-2 w-16 h-16 object-contain opacity-80"
        />
      </div>
    </div>
  );
};

export default Page8WillYou;
