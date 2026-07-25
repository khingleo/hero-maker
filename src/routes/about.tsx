import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Morrison Dzata" },
      {
        name: "description",
        content: "Learn more about Morrison Dzata, designer and creative.",
      },
      { property: "og:title", content: "About — Morrison Dzata" },
      {
        property: "og:description",
        content: "Learn more about Morrison Dzata, designer and creative.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#efece2] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
          About
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          Coming soon — a little more about the person behind the designs.
        </p>
      </div>
    </main>
  );
}
