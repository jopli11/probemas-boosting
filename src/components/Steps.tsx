import { steps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const stepIcons: Record<number, JSX.Element> = {
  1: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <ChatIcon className="h-7 w-7" />
    </div>
  ),
  2: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
      <TicketIcon className="h-7 w-7" />
    </div>
  ),
  3: (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-probemas-primary/15 text-probemas-primary">
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
          subtitle="Join, open a ticket, and get your services started."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="card-surface p-6 space-y-3">
              {stepIcons[item.step]}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-probemas-muted">{item.description}</p>
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
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17.5 4 20v-4.5" />
      <rect x="4" y="4" width="16" height="12" rx="3" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
    </svg>
  );
}

function TicketIcon({ className = "" }: { className?: string }) {
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
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5a1.5 1.5 0 0 0 0-3Z" />
      <path d="M12 7v1.5M12 11.25v1.5M12 15v1" />
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
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
      <circle cx="9" cy="19" r="1.3" />
      <circle cx="17" cy="19" r="1.3" />
      <path d="M5 5h2l1.2 9h9l1-6.5H7.3" />
    </svg>
  );
}

