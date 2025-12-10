import { features } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

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
                {feature.icon}
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

