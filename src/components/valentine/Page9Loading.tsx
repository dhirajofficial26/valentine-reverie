import { useEffect, useState } from "react";
import catPortrait from "@/assets/cat-portrait.jpg";
import valentineVideo from "@/assets/valentine-video.mp4";

interface Page9Props {
  onRestart: () => void;
}

const Page9Loading = ({ onRestart }: Page9Props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onRestart();
  };

  if (showVideo && !showAlert) {
    return (
      <div className="page-enter flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h1 className="valentine-title mb-6 text-center">For You 💕</h1>
        <div className="max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl">
          <video
            src={valentineVideo}
            autoPlay
            playsInline
            controls
            onEnded={handleVideoEnd}
            className="w-full"
          />
        </div>
        <button onClick={handleVideoEnd} className="valentine-btn mt-6">
          Skip to Finale ❤️
        </button>
      </div>
    );
  }

  if (showAlert) {
    return (
      <div className="page-enter flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="valentine-card-bg rounded-2xl p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">💕 Happy Valentine's Day! 💕</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            This was made with love for you! Hope you enjoyed this journey. ❤️
          </p>
          <button onClick={handleAlertClose} className="valentine-btn w-full">
            Start Over 🐝
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <img
        src={catPortrait}
        alt="Cat"
        className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary/30 shadow-xl mb-8"
      />
      <h2 className="text-2xl font-bold text-foreground mb-2">Something Special</h2>
      <p className="text-muted-foreground mb-8">is being prepared for you...</p>

      <div className="w-64 h-3 bg-primary/20 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-primary rounded-full animate-loading-fill" />
      </div>

      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-primary animate-bounce-dot"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Page9Loading;
