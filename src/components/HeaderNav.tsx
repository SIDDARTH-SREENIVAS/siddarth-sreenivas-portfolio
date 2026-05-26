"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" }
];

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-colors",
        isScrolled ? "bg-white/90 backdrop-blur border-b border-black/10" : "bg-transparent"
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-lg">
          SS<span className="text-action">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black/70 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full border border-black bg-black text-white hover:bg-action hover:border-action transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:border-black/30 transition-colors"
          aria-label="Open navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 h-5 relative">
            <span
              className={[
                "absolute left-0 right-0 h-0.5 bg-black transition-transform",
                open ? "top-2.5 rotate-45" : "top-1.5"
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 right-0 h-0.5 bg-black transition-opacity",
                open ? "top-2.5 opacity-0" : "top-2.5 opacity-100"
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 right-0 h-0.5 bg-black transition-transform",
                open ? "top-2.5 -rotate-45" : "top-3.5"
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-black/80 hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-black bg-black text-white hover:bg-action hover:border-action transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

