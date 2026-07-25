import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Morrison Dzata" },
      {
        name: "description",
        content: "Get in touch with Morrison Dzata for your next design project.",
      },
      { property: "og:title", content: "Contact — Morrison Dzata" },
      {
        property: "og:description",
        content: "Get in touch with Morrison Dzata for your next design project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#efece2] px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-6xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-neutral-700">
          Coming soon — let's talk about your next project.
        </p>
      </div>
    </main>
  );
}
