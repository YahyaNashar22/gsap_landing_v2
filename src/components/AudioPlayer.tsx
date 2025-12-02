import { useEffect, useRef, useState } from "react";

import audio from "../assets/audio/loop.m4a";

const AudioPlayer = () => {
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState<boolean>(false);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current!.play();
    } else {
      audioElementRef.current!.pause();
    }
  }, [isAudioPlaying]);

  return (
    <button
      className="fixed bottom-4 right-4 bg-black w-12 h-12 rounded-full 
             flex items-center justify-center z-10 shadow-md active:scale-95 
             transition"
      onClick={toggleAudioIndicator}
    >
      <audio ref={audioElementRef} className="hidden" src={audio} />
      {[1, 2, 3].map((bar) => (
        <div
          key={bar}
          className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
          style={{
            animationDelay: `${bar * 0.1}s`,
          }}
        />
      ))}
    </button>
  );
};

export default AudioPlayer;
