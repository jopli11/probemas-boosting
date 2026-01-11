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
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Earn Rewards
            </p>
            <h3 className="text-h3-mobile font-bold font-raleway">Every Time You Buy</h3>
            <p className="text-white/70">
              Log in and start earning Loyalty Points for every purchase. Redeem them for value on future orders.
            </p>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-sm text-probemas-text">
              <span className="font-semibold text-secondary">Purchase</span>
              <span className="px-2 text-white/70">››</span>
              <span className="font-semibold text-secondary">Earn Points</span>
              <span className="px-2 text-white/70">››</span>
              <span className="font-semibold text-secondary">Redeem</span>
            </div>
            <button className="w-full rounded-xl bg-yellow px-4 py-3 text-sm font-bold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg font-chakra tracking-[-0.56px]">
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
                    <div className="border-t border-white/5 px-5 py-4 text-sm text-white/70">
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

