import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="text-lg font-black tracking-tight text-neutral-900"
        >
          MORRISON<span className="text-neutral-500">.</span>
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
          to="/contact"
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 md:inline-flex"
        >
          Hire Me
        </Link>

        {/* Mobile menu placeholder — minimal hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-neutral-900" />
          <span className="h-0.5 w-4 bg-neutral-900" />
          <span className="h-0.5 w-6 bg-neutral-900" />
        </button>
      </nav>
    </header>
  );
}
