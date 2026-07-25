import { useState, useEffect } from "react";

interface TypewriterProps {
  /** Single string (legacy) */
  text?: string;
  /** Array of strings to cycle through */
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
}

export function Typewriter({
  text,
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  loop = false,
  className = "",
}: TypewriterProps) {
  const items = texts ?? (text ? [text] : [""]);

  const [mounted, setMounted] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const current = items[index];

    const delay = isDeleting
      ? deletingSpeed
      : displayed === current
        ? pauseDuration
        : typingSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayed === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % items.length);
        } else {
          setDisplayed((prev) => prev.slice(0, -1));
        }
      } else {
        if (displayed === current) {
          if (loop || items.length > 1) {
            setIsDeleting(true);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length + 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    displayed,
    isDeleting,
    index,
    items,
    loop,
    mounted,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {mounted ? displayed : items[0]}
      <span
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-current animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}
