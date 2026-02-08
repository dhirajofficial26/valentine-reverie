import catsTogether from "@/assets/cats-together.jpg";
import dogFlowers from "@/assets/dog-flowers.jpg";
import catGift from "@/assets/cat-gift.jpg";

interface Page4Props {
  onNext: () => void;
}

const photos = [
  { src: catsTogether, caption: "Us? 😊", rotate: "-3deg" },
  { src: dogFlowers, caption: "See i brought you flowers ❤️", rotate: "2deg" },
  { src: catGift, caption: "Some extra flowers & a surprise gift 🎁", rotate: "-2deg" },
];

const Page4RandomThoughts = ({ onNext }: Page4Props) => {
  return (
    <div className="page-enter flex flex-col items-center min-h-screen px-4 py-8">
      <p className="valentine-subtitle mb-2">the kind that matter</p>
      <h1 className="valentine-title mb-3 text-center">Some random thoughts</h1>
      <p className="text-muted-foreground text-center text-sm mb-8">
        Simple thoughts, genuine feelings ♡
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="polaroid card-hover"
            style={{ transform: `rotate(${photo.rotate})` }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] object-cover rounded-sm"
            />
            <p className="text-center text-foreground/80 font-medium text-sm mt-2 font-script text-lg">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="valentine-btn">
        Next 💝
      </button>
    </div>
  );
};

export default Page4RandomThoughts;
