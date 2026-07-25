import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Leo" },
      { name: "description", content: "Selected work across graphic design, photography, development and more by Leo." },
      { property: "og:title", content: "Portfolio — Leo" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const categories = ["All", "Design", "Photography", "Development", "Content"];

const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Design",
    type: "Branding",
    year: "2024",
    description: "Full brand identity for a Ghanaian fintech startup — logo, colour system, typography and guidelines.",
    bg: "#dcd6c2",
  },
  {
    id: 2,
    title: "Editorial Portrait Series",
    category: "Photography",
    type: "Photography",
    year: "2024",
    description: "A 12-image portrait series exploring identity and expression in contemporary Accra.",
    bg: "#e8e4d6",
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "Development",
    type: "Full Stack",
    year: "2024",
    description: "React + Node.js dashboard for a retail brand — inventory management, analytics and order tracking.",
    bg: "#d4ceb8",
  },
  {
    id: 4,
    title: "Packaging Redesign",
    category: "Design",
    type: "Packaging",
    year: "2023",
    description: "Premium packaging redesign for a local cosmetics brand targeting international markets.",
    bg: "#ccc6b0",
  },
  {
    id: 5,
    title: "Product Photography",
    category: "Photography",
    type: "Photography",
    year: "2023",
    description: "Clean studio product shots for an e-commerce skincare brand — 40+ SKUs across two shoot days.",
    bg: "#e0dbd0",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Content",
    type: "Content",
    year: "2024",
    description: "3-month content strategy and execution for a fashion brand — grew engagement by 240%.",
    bg: "#d8d2be",
  },
  {
    id: 7,
    title: "UI/UX — Mobile App",
    category: "Design",
    type: "UI/UX",
    year: "2024",
    description: "End-to-end UI/UX design for a health-tracking mobile application — research through high-fidelity.",
    bg: "#d0cabb",
  },
  {
    id: 8,
    title: "GRC Audit Report",
    category: "Development",
    type: "GRC",
    year: "2023",
    description: "Comprehensive compliance gap analysis and risk framework for a mid-size financial services firm.",
    bg: "#c8c2ac",
  },
];

function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main
      className="min-h-screen w-full pt-24"
      style={{ background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)" }}
    >
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
          Selected Work
        </span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            className="font-black tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
          >
            My Projects
          </h1>
          <p className="max-w-sm text-[15px] leading-relaxed text-neutral-700">
            A curated selection of projects across design, photography, development and content.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`border-2 px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-200 ${
                active === cat
                  ? "border-neutral-900 bg-neutral-900 text-[#efece2]"
                  : "border-neutral-900/20 bg-transparent text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-px bg-neutral-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between p-8 transition-colors duration-300 hover:bg-neutral-900"
              style={{ backgroundColor: project.bg, minHeight: "320px" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">
                  {project.type}
                </span>
                <span className="text-[11px] font-bold tracking-widest text-neutral-400 group-hover:text-neutral-500">
                  {project.year}
                </span>
              </div>

              {/* Bottom content */}
              <div>
                <h2
                  className="font-black tracking-tight text-neutral-900 transition-colors group-hover:text-[#efece2]"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-neutral-700 transition-colors group-hover:text-neutral-300">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-900 opacity-0 transition-opacity group-hover:text-[#efece2] group-hover:opacity-100">
                  View Project
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-neutral-900/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10">
          <p
            className="font-black tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Have a project in mind?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
