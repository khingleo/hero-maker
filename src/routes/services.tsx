import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Morrison Dzata" },
      {
        name: "description",
        content: "Graphic design, logo design, UI/UX design, and packaging design services.",
      },
      { property: "og:title", content: "Services — Morrison Dzata" },
      {
        property: "og:description",
        content: "Graphic design, logo design, UI/UX design, and packaging design services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#efece2] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
          Services
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          Coming soon — a detailed look at design services offered.
        </p>
      </div>
    </main>
  );
}
