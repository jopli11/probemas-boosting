import { features } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const featureIcons: Record<string, JSX.Element> = {
  "Fast Services": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <BoltIcon className="h-7 w-7" />
    </div>
  ),
  "Safety Guarantee": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <ShieldIcon className="h-7 w-7" />
    </div>
  ),
  "Daily Updates": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <ClockIcon className="h-7 w-7" />
    </div>
  ),
  "VPN Encryption": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <LockIcon className="h-7 w-7" />
    </div>
  ),
  "Real-Time Screenshots": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <MonitorIcon className="h-7 w-7" />
    </div>
  ),
  "24/7 Support": (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <PhoneIcon className="h-7 w-7" />
    </div>
  ),
};

export function Features() {
  return (
    <section id="features" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Our Features"
          subtitle="Why Choose Probemas?"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-surface h-full p-6 transition hover:-translate-y-1 hover:border-probemas-primary/40 hover:shadow-soft"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/10 text-2xl">
                {featureIcons[feature.title] ?? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
                    <BoltIcon className="h-7 w-7" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-probemas-muted">
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
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v6c0 4.97 3.1 7.94 7 9 3.9-1.06 7-4.03 7-9V6Z" />
      <path d="M9 12.5 11 14l4-4" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M9 11V8a3 3 0 0 1 6 0v3" />
      <path d="M12 15v2" />
    </svg>
  );
}

function MonitorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M10 20h4" />
      <path d="M12 16v4" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.6 10.8a12 12 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 8 8 0 0 0 2.5.4 1 1 0 0 1 1 1V19a2 2 0 0 1-2.2 2 18 18 0 0 1-8-3.2 18 18 0 0 1-5.6-5.6A18 18 0 0 1 3 4.2 2 2 0 0 1 5 2h2.6a1 1 0 0 1 1 1 8 8 0 0 0 .4 2.5 1 1 0 0 1-.24 1Z" />
    </svg>
  );
}

