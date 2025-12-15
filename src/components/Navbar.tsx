"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-probemas-bg/80 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/logos/probemas.svg"
              alt="Probemas"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-probemas-bgSoft px-3 py-1 text-xs font-semibold text-probemas-text shadow-soft ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            6,500+ online
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-probemas-muted transition hover:text-probemas-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-probemas-bgSoft text-probemas-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-probemas-text" />
            <span className="block h-0.5 w-5 bg-probemas-text" />
            <span className="block h-0.5 w-5 bg-probemas-text" />
          </div>
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/5 bg-probemas-bgSoft">
          <div className="page-container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-probemas-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

