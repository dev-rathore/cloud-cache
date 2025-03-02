import { useEffect, useRef } from "react";
import { Button } from "./button";
import { Pause, Play } from "lucide-react";
import audio from "@/assets/audios/sunflower.mp3";
import { useMusicStore } from "@/store/music.store";

export default function MusicBars() {
  const {
    isPlaying,
    toggleMusic,
    // setPlaying,
  } = useMusicStore();
  const audioRef = useRef<HTMLAudioElement>(new Audio(audio));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isPlaying) {
      audio
        .play()
        .catch((error) => console.error("Audio play error:", error));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  // useEffect(() => {
  //   setPlaying(true);
  // }, [setPlaying]);

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 items-center">
      {isPlaying && (
        <div className="flex gap-1 items-end mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-1 bg-primary animate-bounce"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDuration: `${Math.random() * 0.6 + 0.4}s`,
              }}
            />
          ))}
        </div>
      )}

      <Button variant="ghost" className="cursor-pointer" onClick={toggleMusic}>
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </Button>
    </div>
  );
}
