"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before ordering."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="card-surface p-6">
            <div className="flex h-full flex-col justify-between space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-probemas-muted">
                  Earn Rewards
                </p>
                <h3 className="mt-2 text-2xl font-semibold">Loyalty Perks</h3>
                <p className="mt-2 text-probemas-muted">
                  Repeat orders unlock discounts and priority routing. Chat with support for details.
                </p>
              </div>
              <div className="rounded-xl border border-dashed border-white/15 bg-white/5 p-4 text-probemas-muted">
                Placeholder for rewards card / imagery
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const open = openIndex === idx;
              return (
                <div key={item.question} className="card-surface overflow-hidden">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
                  >
                    <span>{item.question}</span>
                    <span className="text-lg">{open ? "–" : "+"}</span>
                  </button>
                  {open ? (
                    <div className="border-t border-white/5 px-5 py-4 text-sm text-probemas-muted">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

