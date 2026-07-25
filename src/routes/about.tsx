import { createFileRoute } from "@tanstack/react-router";
import { LogoLoop } from "@/components/LogoLoop";
import {
  Figma,
  Code2,
  Camera,
  Film,
  Globe,
  ShieldCheck,
  Pen,
  Database,
  LayoutTemplate,
  Cpu,
  GitBranch,
  ImagePlay,
  FileVideo,
  Palette,
  Monitor,
  Layers,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Leo" },
      { name: "description", content: "Learn more about Leo — Graphic Designer, Photographer, Full Stack Developer, GRC Auditor, Content Creator and Editor." },
      { property: "og:title", content: "About — Leo" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const iconStyle = { width: "100%", height: "100%", strokeWidth: 1.5 };

// Row 1 — Design & Creative
const designLogos = [
  { node: <Figma style={iconStyle} />, title: "Figma" },
  { node: <Palette style={iconStyle} />, title: "Graphic Design" },
  { node: <Camera style={iconStyle} />, title: "Photography" },
  { node: <Film style={iconStyle} />, title: "Video Editing" },
  { node: <Layers style={iconStyle} />, title: "Illustrator" },
  { node: <ImagePlay style={iconStyle} />, title: "Photoshop" },
  { node: <FileVideo style={iconStyle} />, title: "Premiere Pro" },
  { node: <Video style={iconStyle} />, title: "After Effects" },
  { node: <Pen style={iconStyle} />, title: "Content Creation" },
  { node: <Monitor style={iconStyle} />, title: "UI/UX Design" },
];

// Row 2 — Development & Tech
const devLogos = [
  { node: <Code2 style={iconStyle} />, title: "React" },
  { node: <Globe style={iconStyle} />, title: "TypeScript" },
  { node: <LayoutTemplate style={iconStyle} />, title: "Next.js" },
  { node: <Cpu style={iconStyle} />, title: "Node.js" },
  { node: <Database style={iconStyle} />, title: "PostgreSQL" },
  { node: <GitBranch style={iconStyle} />, title: "Git" },
  { node: <ShieldCheck style={iconStyle} />, title: "GRC & Compliance" },
  { node: <Globe style={iconStyle} />, title: "Full Stack Dev" },
  { node: <Layers style={iconStyle} />, title: "Tailwind CSS" },
];

function About() {
  return (
    <main
      className="min-h-screen w-full pt-24"
      style={{ background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)" }}
    >
      {/* Hero strip */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
              About me
            </span>
            <h1
              className="mt-4 font-black tracking-tight text-neutral-900"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Creative.
              <br />
              Curious.
              <br />
              Capable.
            </h1>
          </div>

          <div className="space-y-6 border-l-2 border-neutral-900/10 pl-8">
            <p className="text-[15px] leading-relaxed text-neutral-800">
              I'm <span className="font-bold">Leo</span> — a multi-disciplinary creative based in Ghana. I live at the intersection of design, technology, and storytelling.
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-800">
              Whether I'm crafting a brand identity, shooting on location, auditing a compliance framework, or shipping a full-stack application — I bring the same level of intentionality and craft to everything I do.
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-800">
              I believe great work comes from understanding people first. Every project starts with listening, then building something that actually solves the problem.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>



      {/* Skills — LogoLoop */}
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-10 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            Tools & Technologies
          </span>
          <p className="mt-2 text-[15px] text-neutral-600">
            The stack I work with across all disciplines.
          </p>
        </div>

        {/* Row 1 — Design tools, scrolling left */}
        <div className="mb-6" style={{ height: "72px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={designLogos}
            speed={60}
            direction="left"
            logoHeight={36}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#e8e4d6"
            ariaLabel="Design and creative tools"
            style={{ color: "#1a1a1a" }}
          />
        </div>

        {/* Row 2 — Dev tools, scrolling right */}
        <div style={{ height: "72px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={devLogos}
            speed={60}
            direction="right"
            logoHeight={36}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#e8e4d6"
            ariaLabel="Development and tech tools"
            style={{ color: "#1a1a1a" }}
          />
        </div>


      </section>

      {/* CTA strip */}
      <section className="border-t-2 border-neutral-900/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-16 md:flex-row md:px-10">
          <p
            className="font-black tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Let's build something together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-transparent px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-neutral-900 transition-colors duration-200 hover:bg-neutral-900 hover:text-[#efece2]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
