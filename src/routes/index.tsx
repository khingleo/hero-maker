import { createFileRoute } from "@tanstack/react-router";
import designerAsset from "@/assets/designer.png.asset.json";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Do you need a Designer? — Morrison Dzata" },
      {
        name: "description",
        content:
          "Graphic, logo, UI/UX and packaging design by Morrison Dzata. Anything design — if I can't, I'll find someone. But I know I can.",
      },
      { property: "og:title", content: "Do you need a Designer? — Morrison Dzata" },
      {
        property: "og:description",
        content:
          "Graphic, logo, UI/UX and packaging design by Morrison Dzata.",
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
      <span aria-hidden className="mt-0.5 text-base leading-none">👉</span>
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
        <div className="relative flex h-full items-center justify-center md:justify-start">
          <img
            src={designerAsset.url}
            alt="3D illustrated designer portrait"
            className="h-auto max-h-[70vh] w-auto max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 pb-16 md:pb-0 md:pt-40">
          <h1
            className="font-black tracking-tight text-neutral-900"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            <Typewriter text="Do you need a Designer.?" />
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
            But I know <span className="font-bold">I can.</span>{" "}
            <span aria-hidden>😎</span>
          </p>
        </div>
      </div>

      {/* Signature */}
      <div className="absolute bottom-4 right-6 text-xs text-neutral-500 md:bottom-6 md:right-10 md:text-sm">
        Created by <span className="font-semibold text-neutral-800">Morrison Dzata</span>
      </div>
    </section>
  );
}
