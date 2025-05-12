"use client";
import { Pause, Play } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

const Music: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/music1.mp3");
      audioRef.current.loop = true;
    }
  }, []);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const stop = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed top-5 right-5">
      <button
        className={`bg-[#a9a05c] w-10 h-10 flex justify-center items-center rounded-full text-white transition-transform duration-300 animate-pulse`}
        onClick={isPlaying ? stop : play}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default Music;
