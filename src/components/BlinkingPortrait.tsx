import { useState, useCallback } from "react";

interface BlinkingPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlinkingPortrait({ src, alt, className = "" }: BlinkingPortraitProps) {
  const [blinkKey, setBlinkKey] = useState(0);

  const triggerBlink = useCallback(() => {
    setBlinkKey((k) => k + 1);
  }, []);

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={triggerBlink}
      onMouseEnter={triggerBlink}
      title="Click or hover to make me blink"
      aria-label="Interactive portrait — click or hover to blink"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerBlink();
        }
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-auto max-h-[70vh] w-auto max-w-full object-contain drop-shadow-2xl"
      />
      {/* Left eyelid overlay */}
      <span
        key={`left-${blinkKey}`}
        className="pointer-events-none absolute origin-top rounded-full animate-blink-eyelid"
        style={{
          left: "35%",
          top: "32%",
          width: "9%",
          height: "4%",
          background: "linear-gradient(180deg, #8a5a42 0%, #5c3626 100%)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        }}
      />
      {/* Right eyelid overlay */}
      <span
        key={`right-${blinkKey}`}
        className="pointer-events-none absolute origin-top rounded-full animate-blink-eyelid"
        style={{
          left: "53%",
          top: "32%",
          width: "9%",
          height: "4%",
          background: "linear-gradient(180deg, #8a5a42 0%, #5c3626 100%)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
}
