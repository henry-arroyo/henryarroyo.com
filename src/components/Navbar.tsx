import { useState } from "react";
import data from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-terminal-bg/90 backdrop-blur border-b border-terminal-card">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono font-bold text-terminal-green glow-green text-lg">
          &gt; henry_arroyo
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {data.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-text-muted hover:text-terminal-green hover:glow-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-body"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-terminal-panel border-t border-terminal-card px-6 py-4 space-y-4">
          {data.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-sm text-text-muted hover:text-terminal-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
