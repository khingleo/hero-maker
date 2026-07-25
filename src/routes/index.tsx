import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import designerImage from "@/assets/ChatGPT Image Jul 25, 2026, 01_19_10 AM.png";
import designerVideo from "@/assets/Boy_blinks_and_tilts_head_202607250151.mp4";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo — Graphic Designer, Photographer & Developer" },
      {
        name: "description",
        content:
          "Leo is a Graphic Designer, Photographer, Full Stack Developer and GRC Auditor. Anything creative — if I can't, I'll find someone. But I know I can.",
      },
      { property: "og:title", content: "Leo — Graphic Designer, Photographer & Developer" },
      {
        property: "og:description",
        content:
          "Graphic design, photography, full stack development and GRC auditing by Leo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Service({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-[13px] leading-tight tracking-wide text-neutral-800">
        <div className="uppercase">{label.split(" ")[0]}</div>
        <div className="font-extrabold uppercase">
          {label.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleMouseEnter() {
    setHovered(true);
    videoRef.current?.play();
  }

  function handleMouseLeave() {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-28"
      style={{
        background:
          "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)",
      }}
    >
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-end gap-8 px-6 md:grid-cols-2 md:items-center md:px-10">
        {/* Character */}
        <div
          className="relative flex h-full items-center justify-center md:justify-start cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Stacking wrapper — both media layers sit on top of each other,
              only opacity changes so there are zero layout shifts */}
          <div className="relative h-[70vh] w-full flex items-center justify-center md:justify-start">
            {/* Static image */}
            <img
              src={designerImage}
              alt="3D illustrated designer portrait"
              className="absolute inset-0 m-auto h-full w-auto max-w-full object-contain drop-shadow-2xl transition-opacity duration-500 ease-in-out"
              style={{ opacity: hovered ? 0 : 1 }}
            />

            {/* Video — crossfades in on hover */}
            <video
              ref={videoRef}
              src={designerVideo}
              muted
              playsInline
              loop
              className="absolute inset-0 m-auto h-full w-auto max-w-full object-contain drop-shadow-2xl transition-opacity duration-500 ease-in-out"
              style={{ opacity: hovered ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 pb-16 md:pb-0 md:pt-40">
          <h1
            className="font-black tracking-tight text-neutral-900"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
            }}
          >
            {/* Static greeting */}
            <span className="block text-neutral-500 font-light" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "0.02em" }}>
              Hello, I'm Leo
            </span>

            {/* Typewriter roles */}
            <span className="block mt-2">
              I'm your{" "}
              <Typewriter
                texts={[
                  "Graphic Designer.",
                  "Photographer.",
                  "Full Stack Developer.",
                  "GRC Auditor.",
                  "Content Creator.",
                  "Editor.",
                ]}
                loop={true}
              />
            </span>
          </h1>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            <Service label="Graphic Design" />
            <Service label="Logo Design" />
            <Service label="UI/UX Design" />
            <Service label="Packaging Design" />
          </div>

          <p className="mt-10 max-w-md text-[15px] leading-relaxed text-neutral-800">
            Anything <span className="font-bold">Design</span> if I can't, I
            will find someone.
            <br />
            But I know <span className="font-bold">I can.</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* Download CV — filled, dark */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-none border-2 border-neutral-900 bg-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

            {/* View Projects — outlined */}
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-none border-2 border-neutral-900 bg-transparent px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-neutral-900 transition-colors duration-200 hover:bg-neutral-900 hover:text-[#efece2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-4 right-6 text-xs text-neutral-500 md:bottom-6 md:right-10 md:text-sm">
        Created by <span className="font-semibold text-neutral-800">K.LEO</span>
      </div>
    </section>
  );
}
