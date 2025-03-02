import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme.provider";

import sound from "@/assets/audios/theme-toggle.mp3";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <>
      {
        theme === 'light' ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              playSound();
              setTheme("dark");
            }}
          >
            <Moon
              className="w-6 h-6 text-slate-700"
            />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              playSound();
              setTheme("light");
            }}
          >
            <Sun
              className="w-6 h-6 text-yellow-400"
            />
          </div>
        )
      }
    </>
  )
};
