"use client";

import { useMemo, useState } from "react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(testimonials.length / pageSize));
  const [page, setPage] = useState(0);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return testimonials.slice(start, start + pageSize);
  }, [page]);

  return (
    <section id="reviews" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real feedback from players who trust Probemas."
        />

        <div className="grid gap-6 md:grid-cols-[280px,1fr]">
          <div className="card-surface p-6 space-y-3">
            <p className="text-sm text-white/70">Overall Rating</p>
            <p className="text-4xl font-bold">4.9</p>
            <p className="text-sm text-white/70">2,400+ verified reviews</p>
            <div className="mt-4 space-y-2">
              {["Service speed", "Communication", "Safety"].map((label) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>{label}</span>
                    <span>5.0</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full bg-yellow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {visible.map((item) => (
                <div key={item.author} className="card-surface p-5 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">{item.source}</span>
                    <span className="rounded-full bg-yellow/20 px-2 py-1 text-xs font-bold text-yellow font-chakra">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white">{item.text}</p>
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>{item.author}</span>
                    <span>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 ? (
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      page === idx ? "bg-yellow" : "bg-white/20"
                    }`}
                    aria-label={`Go to testimonials page ${idx + 1}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

