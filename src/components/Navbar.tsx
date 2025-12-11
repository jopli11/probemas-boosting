"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-probemas-bg/80 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between">
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

