// Music context provider for global audio playback
import { createContext, useContext, useState, useRef, useEffect, ReactNode, useCallback } from "react";

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  volume: number;
  setVolume: (vol: number) => void;
  // Song player for individual songs
  currentSong: string | null;
  songProgress: number;
  songDuration: number;
  playSong: (songId: string, audioUrl: string) => void;
  stopSong: () => void;
  isSongPlaying: (songId: string) => boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusicPlayer = () => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusicPlayer must be used within MusicProvider");
  return context;
};

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const songRef = useRef<HTMLAudioElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.4);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [songProgress, setSongProgress] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  // Initialize background music
  useEffect(() => {
    bgMusicRef.current = new Audio("/audio/background-music.mp3");
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = volume;

    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
      if (songRef.current) {
        songRef.current.pause();
        songRef.current = null;
      }
    };
  }, []);

  // Update background music volume
  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = volume;
    }
    if (songRef.current) {
      songRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = useCallback(() => {
    if (!bgMusicRef.current) return;

    if (isPlaying) {
      bgMusicRef.current.pause();
    } else {
      // Fade in effect
      bgMusicRef.current.volume = 0;
      bgMusicRef.current.play().catch(console.error);
      
      // Smooth fade in
      let vol = 0;
      const fadeIn = setInterval(() => {
        vol += 0.05;
        if (bgMusicRef.current) {
          bgMusicRef.current.volume = Math.min(vol, volume);
        }
        if (vol >= volume) clearInterval(fadeIn);
      }, 50);
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, volume]);

  const setVolume = (vol: number) => {
    setVolumeState(vol);
  };

  // Play a specific song with its own audio file
  const playSong = useCallback((songId: string, audioUrl: string) => {
    // Stop any currently playing song
    if (songRef.current) {
      songRef.current.pause();
      songRef.current = null;
    }

    // Create new audio for the song using the provided audioUrl
    songRef.current = new Audio(audioUrl);
    songRef.current.volume = volume;
    
    // Set up progress tracking
    songRef.current.addEventListener('timeupdate', () => {
      if (songRef.current) {
        setSongProgress(songRef.current.currentTime);
        setSongDuration(songRef.current.duration || 0);
      }
    });

    songRef.current.addEventListener('ended', () => {
      setCurrentSong(null);
      setSongProgress(0);
    });

    songRef.current.play().catch(console.error);
    setCurrentSong(songId);
  }, [volume]);

  const stopSong = useCallback(() => {
    if (songRef.current) {
      // Fade out
      const fadeOut = setInterval(() => {
        if (songRef.current && songRef.current.volume > 0.05) {
          songRef.current.volume -= 0.05;
        } else {
          if (songRef.current) {
            songRef.current.pause();
            songRef.current = null;
          }
          clearInterval(fadeOut);
        }
      }, 30);
    }
    setCurrentSong(null);
    setSongProgress(0);
  }, []);

  const isSongPlaying = useCallback((songId: string) => {
    return currentSong === songId;
  }, [currentSong]);

  return (
    <MusicContext.Provider value={{ 
      isPlaying, 
      toggleMusic, 
      volume, 
      setVolume,
      currentSong,
      songProgress,
      songDuration,
      playSong,
      stopSong,
      isSongPlaying
    }}>
      {children}
    </MusicContext.Provider>
  );
};
