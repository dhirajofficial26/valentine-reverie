/**
 * ═══════════════════════════════════════════════════════════════
 *  💕 VALENTINE CONFIG — Edit everything from here! 💕
 * ═══════════════════════════════════════════════════════════════
 *
 *  To customize this valentine experience:
 *  1. Replace images in src/assets/ and update paths below
 *  2. Replace audio files in public/audio/ and update paths below
 *  3. Replace video in src/assets/ and update path below
 *  4. Edit all text, names, and messages below
 */

// ─── ASSET IMPORTS ──────────────────────────────────────────
// Replace these files in src/assets/ to change images/video
import catPortrait from "@/assets/cat-portrait.jpg";
import catsTogether from "@/assets/cats-together.jpg";
import dogFlowers from "@/assets/dog-flowers.jpg";
import catGift from "@/assets/cat-gift.jpg";
import bunnyImg from "@/assets/bunny.png";
import valentineVideo from "@/assets/valentine-video.mp4";

// ─── USER DETAILS ───────────────────────────────────────────
export const userDetails = {
  /** The person you're sending this to */
  recipientName: "Anjali",
  /** Your name (the sender) */
  senderName: "Pinak",
  /** Greeting in the love note */
  greeting: "Hey love",
  /** Sign-off in the love note */
  signOff: "Always ♡",
  /** Final letter sign-off */
  finalSignOff: "Forever Yours 💝",
  /** Credit text at bottom */
  creditText: "Made with love by Pinak 💕",
};

// ─── INTRO PAGE ─────────────────────────────────────────────
export const introConfig = {
  /** Profile image shown during loading */
  profileImage: catPortrait,
  /** Video shown on intro page */
  video: valentineVideo,
  /** Loading screen title */
  loadingTitle: "Something Special",
  /** Loading screen subtitle */
  loadingSubtitle: "is being prepared just for you...",
  /** Video section title */
  videoTitle: "For You 💕",
  /** Video section subtitle */
  videoSubtitle: "A special message...",
  /** Button text after video */
  videoContinueBtn: "Continue to the Journey ✨",
  /** Welcome screen subtitle */
  welcomeSubtitle: "Welcome to...",
  /** Welcome screen title */
  welcomeTitle: "Your Valentine Journey",
  /** Welcome screen message */
  welcomeMessage:
    "I've prepared something special for you today. Get ready for games, memories, and lots of love! 💕",
  /** Start button text */
  startBtn: "Begin the Journey 🐝 →",
};

// ─── LOVE NOTE PAGE ─────────────────────────────────────────
export const loveNoteConfig = {
  /** Profile image in the note */
  profileImage: catPortrait,
  /** Subtitle above title */
  subtitle: "just because today feels right",
  /** Page title */
  title: "A Love Note 💌",
  /** The letter paragraphs (typed out one by one) */
  paragraphs: [
    "I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments.",
    "I admire the way you care, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real.",
    "I appreciate your honesty, your kindness, and the way you show up as yourself.",
    "I don't know where this path leads, but I'd like to take a step forward and see where this connection can grow—at its own pace, in its own time.",
    "No pressure, no expectations—just something sincere, from the heart.",
  ],
  /** Typewriter sound URL */
  typewriterSoundUrl:
    "https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3",
  /** Button text */
  continueBtn: "Keep Going 🐝 →",
};

// ─── WHY YOU MATTER PAGE ────────────────────────────────────
export const whyYouMatterConfig = {
  subtitle: "especially today ✨",
  title: "Why You Matter",
  description: "A glimpse into what makes you extraordinary to me",
  continueBtn: "Continue 💕 →",
  /** Quality cards — add, remove, or edit */
  qualities: [
    { icon: "❤️", title: "Genuine Heart", text: "You care in ways that feel real and unforced" },
    { icon: "🌸", title: "Calm Presence", text: "Being with you feels peaceful and grounding" },
    { icon: "✨", title: "Kind Nature", text: "Your kindness shows up naturally, without trying" },
    { icon: "⭐", title: "You Listen", text: "You pay attention in a way that feels rare" },
    { icon: "💪", title: "Soft Strength", text: "You're strong without needing to be loud about it" },
    { icon: "💎", title: "Just You", text: "Everything about you feels right to me" },
  ],
};

// ─── MOMENTS / PHOTOS PAGE ──────────────────────────────────
export const momentsConfig = {
  subtitle: "the kind that matter 📸",
  title: "Sweet Moments",
  description: "Simple thoughts, genuine feelings ♡",
  continueBtn: "Next Memory 💝 →",
  /**
   * Photos — replace the images in src/assets/ and update here
   * rotate: tilt angle for polaroid effect (-6 to 6)
   */
  photos: [
    { src: catsTogether, caption: "Us together? 😊", date: "Always", rotate: -6 },
    { src: dogFlowers, caption: "I brought you flowers ❤️", date: "Every day", rotate: 4 },
    { src: catGift, caption: "A surprise gift for you 🎁", date: "With love", rotate: -3 },
  ],
};

// ─── MEMORY GAME PAGE ───────────────────────────────────────
export const memoryGameConfig = {
  subtitle: "A little fun for today 🎮",
  title: "Memory Match",
  description: "Match the pairs and test your memory 🧠",
  /** Emoji pairs for the game (6 pairs = 12 cards) */
  emojis: ["❤️", "💕", "🌹", "💝", "💖", "🎁"],
};

// ─── QUIZ PAGE ──────────────────────────────────────────────
export const quizConfig = {
  subtitle: "Let's see how well...",
  title: "You Know Me 💕",
  /** Result messages based on score percentage */
  resultMessages: {
    high: { threshold: 80, message: "You know me so well! 💕", emoji: "🥰" },
    medium: { threshold: 50, message: "Not bad! We're learning about each other 😊", emoji: "😊" },
    low: { threshold: 0, message: "Let's spend more time together! 💝", emoji: "🤗" },
  },
  /**
   * Quiz questions
   * correct: index of the correct answer (0-based)
   */
  questions: [
    {
      question: "What's my favorite food?",
      options: ["Pizza", "Biryani", "Pasta", "Momos"],
      correct: 1,
      emoji: "🍕",
      category: "Favorites",
    },
    {
      question: "When did we first meet?",
      options: ["January 2024", "February 2024", "March 2024", "December 2023"],
      correct: 0,
      emoji: "📅",
      category: "Our Story",
    },
    {
      question: "What's my favorite color?",
      options: ["Blue", "Pink", "Purple", "Black"],
      correct: 2,
      emoji: "🎨",
      category: "Favorites",
    },
    {
      question: "What do I love doing on weekends?",
      options: ["Gaming", "Reading", "Watching movies", "Sleeping"],
      correct: 2,
      emoji: "🎮",
      category: "Lifestyle",
    },
    {
      question: "What's my dream travel destination?",
      options: ["Paris", "Maldives", "Switzerland", "Japan"],
      correct: 3,
      emoji: "✈️",
      category: "Dreams",
    },
    {
      question: "What makes me smile the most?",
      options: ["Cute animals", "Good food", "You 💕", "Music"],
      correct: 2,
      emoji: "😊",
      category: "Happiness",
    },
  ],
};

// ─── SONGS PAGE ─────────────────────────────────────────────
export const songsConfig = {
  subtitle: "Hope they make you smile",
  title: "Songs That Feel Like Valentine's Day",
  continueBtn: "Continue 💕 →",
  /**
   * Songs — place audio files in public/audio/ folder
   * audioUrl: path relative to public (e.g., "/audio/song-name.mp3")
   */
  songs: [
    {
      id: "waalian",
      label: "SIDE A",
      song: "Waalian",
      artist: "Harnoor",
      subtitle: "Some feelings feel calm and deep 🥰",
      audioUrl: "/audio/waalian.mp3",
      cardBg: "linear-gradient(180deg, hsl(35, 45%, 80%) 0%, hsl(30, 40%, 72%) 100%)",
      innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
      reelColor: "hsl(35, 50%, 75%)",
    },
    {
      id: "lag-jaa-gale",
      label: "SIDE A",
      song: "Lag Jaa Gale",
      artist: "Sanam",
      subtitle: "Because closeness matters ♡",
      audioUrl: "/audio/lag-jaa-gale.mp3",
      cardBg: "linear-gradient(180deg, hsl(150, 50%, 78%) 0%, hsl(150, 45%, 68%) 100%)",
      innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
      reelColor: "hsl(150, 45%, 70%)",
    },
    {
      id: "bilionera",
      label: "SIDE A",
      song: "Bilionera",
      artist: "Otilia",
      subtitle: "When emotions say more than words 😍",
      audioUrl: "/audio/bilionera.mp3",
      cardBg: "linear-gradient(180deg, hsl(210, 50%, 78%) 0%, hsl(220, 45%, 68%) 100%)",
      innerBg: "linear-gradient(180deg, hsl(340, 75%, 94%) 0%, hsl(340, 65%, 90%) 100%)",
      reelColor: "hsl(210, 45%, 70%)",
    },
  ],
};

// ─── FINAL LETTER PAGE ──────────────────────────────────────
export const finalLetterConfig = {
  subtitle: "the grand finale... 📜",
  title: "Final Love Letter",
  sealedTitle: "Sealed With Love",
  /** Letter paragraphs */
  paragraphs: [
    `Hey ${userDetails.recipientName},`,
    "This wasn't about perfection, just honesty.",
    "I wanted you to feel appreciated today.",
    "Whatever comes next, I'm glad this moment exists.",
  ],
  continueBtn: "The Grand Finale 💝 →",
};

// ─── FINALE PAGE ────────────────────────────────────────────
export const finaleConfig = {
  /** Bunny/mascot image */
  mascotImage: bunnyImg,
  preRevealSubtitle: "Hey, I made something special for you...",
  preRevealTitle: "Will You Be My Valentine? 💕",
  preRevealMessage: "A little reminder of what this day feels like with you.",
  preRevealHint: "Tap below when you're ready 🐝!",
  openBtn: "Open This 💝 →",
  /** After reveal */
  celebrationTitle: "Happy Valentine's Day!",
  celebrationMessage: "This was made with love just for you! 💕\nHope you enjoyed this journey together. ❤️",
  closingMessage: "With all my love,",
  restartBtn: "Experience Again 🐝 ↻",
};

// ─── BACKGROUND MUSIC ───────────────────────────────────────
export const musicConfig = {
  /** Background music file (place in public/audio/) */
  backgroundMusicUrl: "/audio/background-music.mp3",
};
