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
        <div className="grid gap-10 items-start lg:grid-cols-[minmax(280px,340px),1fr]">
          <div className="card-surface space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-probemas-muted">
              Earn Rewards
            </p>
            <h3 className="text-2xl font-semibold">Every Time You Buy</h3>
            <p className="text-probemas-muted">
              Log in and start earning Loyalty Points for every purchase. Redeem them for value on future orders.
            </p>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-sm text-probemas-text">
              <span className="font-semibold text-probemas-primary">Purchase</span>
              <span className="px-2 text-probemas-muted">››</span>
              <span className="font-semibold text-probemas-primary">Earn Points</span>
              <span className="px-2 text-probemas-muted">››</span>
              <span className="font-semibold text-probemas-primary">Redeem</span>
            </div>
            <button className="w-full rounded-xl bg-probemas-primary px-4 py-3 text-sm font-semibold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
              See Rewards
            </button>
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

