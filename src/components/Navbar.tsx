import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="text-lg font-black tracking-tight text-neutral-900"
        >
          K.LEO
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeProps={{ className: "font-semibold text-neutral-900" }}
                inactiveProps={{ className: "text-neutral-600 hover:text-neutral-900" }}
                activeOptions={{ exact: true }}
                className="text-sm transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/hire-me"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 md:inline-flex"
        >
          Hire Me
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-neutral-900 transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 bg-neutral-900 transition-all ${isOpen ? "w-6 opacity-0" : "w-4 opacity-100"}`}
          />
          <span
            className={`h-0.5 w-6 bg-neutral-900 transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-neutral-900/10 bg-[#efece2]/95 px-6 py-6 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  activeProps={{ className: "font-semibold text-neutral-900" }}
                  inactiveProps={{ className: "text-neutral-600 hover:text-neutral-900" }}
                  activeOptions={{ exact: true }}
                  className="text-lg transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/hire-me"
                onClick={() => setIsOpen(false)}
                className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
