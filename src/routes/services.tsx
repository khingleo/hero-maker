import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Leo" },
      { name: "description", content: "Graphic design, photography, development, GRC auditing, content creation and editing services by Leo." },
      { property: "og:title", content: "Services — Leo" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Services,
});

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Brand identities, logos, packaging, marketing collateral and print design — crafted with intention and built to last.",
    items: ["Brand Identity", "Logo Design", "Packaging", "Print & Digital Collateral", "Typography"],
  },
  {
    number: "02",
    title: "Photography",
    description:
      "Portrait, product, editorial and event photography. Clean, intentional images that tell the story you need told.",
    items: ["Portrait & Headshots", "Product Photography", "Event Coverage", "Editorial Shoots", "Post-Production"],
  },
  {
    number: "03",
    title: "Full Stack Development",
    description:
      "End-to-end web applications — from pixel-perfect interfaces to robust server-side logic. Fast, accessible, and production-ready.",
    items: ["React & TypeScript", "Node.js & REST APIs", "UI/UX Implementation", "Database Design", "Deployment & DevOps"],
  },
  {
    number: "04",
    title: "GRC Auditing",
    description:
      "Governance, Risk and Compliance auditing to keep your organisation aligned, secure and audit-ready at all times.",
    items: ["Risk Assessment", "Compliance Frameworks", "Policy Development", "Audit Reports", "Gap Analysis"],
  },
  {
    number: "05",
    title: "Content Creation",
    description:
      "Engaging content across platforms — from social media to long-form articles — designed to grow audiences and build trust.",
    items: ["Social Media Content", "Copywriting", "Blog & Articles", "Campaign Strategy", "Brand Storytelling"],
  },
  {
    number: "06",
    title: "Editing",
    description:
      "Photo and video editing that elevates raw material into polished, publish-ready work without losing the original feel.",
    items: ["Photo Retouching", "Video Editing", "Colour Grading", "Motion Graphics", "Sound Design"],
  },
];

function Services() {
  return (
    <main
      className="min-h-screen w-full pt-24"
      style={{ background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)" }}
    >
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
          What I do
        </span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            className="font-black tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
          >
            Services
          </h1>
          <p className="max-w-sm text-[15px] leading-relaxed text-neutral-700">
            Six disciplines. One person. All delivered with the same standard of craft and care.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="border-t-2 border-neutral-900/10">
        {services.map((service, i) => (
          <div
            key={service.number}
            className={`border-b-2 border-neutral-900/10 transition-colors duration-200 hover:bg-neutral-900/5`}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-12 md:px-10">
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h2
                  className="font-black tracking-tight text-neutral-900"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-[14px] leading-relaxed text-neutral-700">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:col-span-4">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="border border-neutral-900/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p
            className="font-black tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Ready to start a project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </main>
  );
}
