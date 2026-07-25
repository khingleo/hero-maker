import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hire-me")({
  head: () => ({
    meta: [
      { title: "Hire Me — Leo" },
      { name: "description", content: "Get in touch with Leo for your next project." },
      { property: "og:title", content: "Hire Me — Leo" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HireMe,
});

const services = [
  "Graphic Design",
  "Photography",
  "Full Stack Development",
  "GRC Auditing",
  "Content Creation",
  "Editing",
  "Brand Identity",
  "UI/UX Design",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Let's discuss",
];

function HireMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your actual form submission / email service logic
    setSent(true);
  }

  return (
    <main
      className="min-h-screen w-full pt-24"
      style={{ background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 45%, #dcd6c2 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">

          {/* Left — intro */}
          <div className="md:sticky md:top-32">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
              Work with me
            </span>
            <h1
              className="mt-4 font-black tracking-tight text-neutral-900"
              style={{ fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Let's build
              <br />
              something
              <br />
              great.
            </h1>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-neutral-700">
              Fill in the form and I'll get back to you within 24 hours with a tailored proposal.
            </p>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-3 border-2 border-neutral-900/10 bg-[#efece2] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-700">
                Available for new projects
              </span>
            </div>

            {/* Contact shortcuts */}
            <div className="mt-10 space-y-3 border-t-2 border-neutral-900/10 pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Prefer to reach directly?
              </p>
              <a
                href="mailto:hello@leo.design"
                className="flex items-center gap-2 text-[14px] font-semibold text-neutral-900 underline-offset-4 hover:underline"
              >
                hello@leo.design
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="border-2 border-neutral-900/10 bg-[#efece2] p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-start py-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-green-700">
                  Message sent
                </span>
                <h2
                  className="mt-4 font-black tracking-tight text-neutral-900"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
                >
                  Thanks for reaching out.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                  I'll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" }); }}
                  className="mt-8 border-2 border-neutral-900 px-7 py-3 text-[13px] font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-[#efece2]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                  Project details
                </h2>

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Name *
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
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Email *
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

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Company / Brand
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Service needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="border-2 border-neutral-900/20 bg-[#efece2] px-4 py-3 text-[14px] text-neutral-900 outline-none transition-colors focus:border-neutral-900"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Budget + Timeline */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="border-2 border-neutral-900/20 bg-[#efece2] px-4 py-3 text-[14px] text-neutral-900 outline-none transition-colors focus:border-neutral-900"
                    >
                      <option value="" disabled>Select range</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="timeline" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      Timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={form.timeline}
                      onChange={handleChange}
                      placeholder="e.g. 2 weeks, ASAP"
                      className="border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe what you need, goals, references — anything helpful."
                    className="resize-none border-2 border-neutral-900/20 bg-transparent px-4 py-3 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-[#efece2] transition-colors duration-200 hover:bg-neutral-700"
                >
                  Send Project Brief
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
