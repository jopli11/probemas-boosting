import type { JSX } from "react";
import { features } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const featureIcons: Record<string, JSX.Element> = {
  "Fast Services": <BoltIcon className="h-10 w-10" />,
  "Safety Guarantee": <ShieldIcon className="h-10 w-10" />,
  "Daily Updates": <ClockIcon className="h-10 w-10" />,
  "VPN Encryption": <LockIcon className="h-10 w-10" />,
  "Real-Time Screenshots": <MonitorIcon className="h-10 w-10" />,
  "24/7 Support": <PhoneIcon className="h-10 w-10" />,
};

export function Features() {
  return (
    <section id="features" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Our Features"
          subtitle="Why Choose Probemas?"
          align="center"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-success/5 border border-success/20 text-success transition-all duration-300 group-hover:bg-success/10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(82,210,117,0.15)]">
                {featureIcons[feature.title] ?? (
                  <BoltIcon className="h-10 w-10" />
                )}
              </div>
              <h3 className="text-xl font-bold font-raleway text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 10.91h-6V6.11L12 3.8l6 2.31v5.8h-6v6.91z" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </svg>
  );
}

function MonitorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-1 .45-1 .99 0 9.39 7.61 17 17 17 .54 0 .99-.45.99-1v-3.57c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

