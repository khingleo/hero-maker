import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Morrison Dzata" },
      {
        name: "description",
        content: "Selected design work by Morrison Dzata.",
      },
      { property: "og:title", content: "Portfolio — Morrison Dzata" },
      {
        property: "og:description",
        content: "Selected design work by Morrison Dzata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#efece2] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          Coming soon — a showcase of recent design projects.
        </p>
      </div>
    </main>
  );
}
