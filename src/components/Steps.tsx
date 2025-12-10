import { steps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

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
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-probemas-primary/20 text-sm font-semibold text-probemas-text">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-probemas-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

