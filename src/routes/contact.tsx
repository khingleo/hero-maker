import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Leo" },
      { name: "description", content: "Get in touch with Leo for your next project." },
      { property: "og:title", content: "Contact — Leo" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

const contactInfo = [
  { label: "Email", value: "hello@leo.design", href: "mailto:hello@leo.design" },
  { label: "Instagram", value: "@khingleo", href: "https://instagram.com/khingleo" },
  { label: "GitHub", value: "github.com/khingleo", href: "https://github.com/khingleo" },
  { label: "Location", value: "Accra, Ghana", href: null },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your actual form submission logic
    setSent(true);
  }

  return (
    <main
      className="min-h-screen w-full pt-24"
      style={{ background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)" }}
    >
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
          Get in touch
        </span>
        <h1
          className="mt-4 font-black tracking-tight text-neutral-900"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
        >
          Let's work
          <br />
          together.
        </h1>
      </section>

      {/* Content */}
      <section className="border-t-2 border-neutral-900/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-neutral-900/10 md:grid-cols-12">

          {/* Contact info panel */}
          <div className="bg-[#e8e4d6] p-10 md:col-span-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
              Contact Info
            </h2>
            <ul className="mt-10 space-y-8">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="mt-1 block text-[15px] font-semibold text-neutral-900 underline-offset-4 hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-[15px] font-semibold text-neutral-900">
                      {info.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            <div className="mt-16 border-t-2 border-neutral-900/10 pt-8">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-700">
                  Available for work
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
                Currently accepting new projects. Average response time is under 24 hours.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="bg-[#efece2] p-10 md:col-span-8">
            {sent ? (
              <div className="flex h-full flex-col items-start justify-center py-16">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Message sent
                </span>
                <h2
                  className="mt-4 font-black tracking-tight text-neutral-900"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
                >
                  Thanks for reaching out.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 border-2 border-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-[#efece2]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                  Send a message
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    What do you need?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="border-2 border-neutral-900/20 bg-[#efece2] px-4 py-3 text-[14px] text-neutral-900 outline-none transition-colors focus:border-neutral-900"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Photography">Photography</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="GRC Auditing">GRC Auditing</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Editing">Editing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="resize-none border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
