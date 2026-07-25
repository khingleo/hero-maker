import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
}

export function Typewriter({
  text,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
  loop = false,
  className = "",
}: TypewriterProps) {
  const [mounted, setMounted] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const delay = isDeleting
      ? deletingSpeed
      : displayed === text
        ? pauseDuration
        : typingSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayed === "") {
          setIsDeleting(false);
        } else {
          setDisplayed(displayed.slice(0, -1));
        }
      } else {
        if (displayed === text) {
          if (loop) setIsDeleting(true);
        } else {
          setDisplayed(text.slice(0, displayed.length + 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    displayed,
    isDeleting,
    loop,
    mounted,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {mounted ? displayed : text}
      <span
        className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] bg-current animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}
