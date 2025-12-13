import { SectionHeading } from "./SectionHeading";

export function VideoSection() {
  return (
    <section className="py-16">
      <div className="page-container space-y-8">
        <SectionHeading
          title="Learn How Our In-Game Services Work"
          subtitle="Watch a quick overview of how to order, track progress, and get results."
        />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-probemas-bgSoft shadow-soft">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Probemas Services Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <a
            href="https://discord.gg/ts7mYuwJ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-probemas-primary px-6 py-3 text-sm font-semibold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

