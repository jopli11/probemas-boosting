import type { JSX } from "react";
import { steps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const stepIcons: Record<number, JSX.Element> = {
  1: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/15 text-success border border-success/20">
      <ChatIcon className="h-7 w-7" />
    </div>
  ),
  2: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/15 text-success border border-success/20">
      <TicketIcon className="h-7 w-7" />
    </div>
  ),
  3: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/15 text-success border border-success/20">
      <CartIcon className="h-7 w-7" />
    </div>
  ),
};

export function Steps() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Three Easy Steps"
          subtitle="Join, open a ticket, confirm price & ETA, then track progress."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="card-surface flex h-full flex-col gap-3 p-6 transition hover:border-yellow/30">
              <div className="self-start">{stepIcons[item.step]}</div>
              <h3 className="text-h4-mobile font-bold font-raleway text-white">{item.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed min-h-[48px]">
                {item.description}
              </p>
              {item.details ? (
                <ul className="space-y-1 text-xs text-white/70 pt-1">
                  {item.details.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}

function TicketIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 10V6a2 2 0 00-2-2H4a2 2 0 00-2 2v4a3 3 0 010 6v4a2 2 0 002 2h16a2 2 0 002-2v-4a3 3 0 010-6zM11 15.5h2v2h-2v-2zm0-4.5h2v2h-2v-2zm0-4.5h2v2h-2v-2z" />
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

