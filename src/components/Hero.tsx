import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-probemas-bg to-probemas-bgSoft pb-16 pt-12"
    >
      <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-probemas-muted">
            Probemas Services
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-probemas-text md:text-5xl">
              Maximize Your OSRS Experience
            </h1>
            <p className="text-lg text-probemas-muted">
              Dominate RuneScape today with trusted boosters, rapid delivery, and transparent progress updates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://discord.gg/ts7mYuwJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-probemas-primary px-6 py-3 text-base font-semibold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started
            </a>
            <a
              href="https://discord.gg/ts7mYuwJ"
              target="_blank"
              rel="noreferrer"
              className="text-probemas-muted underline-offset-4 hover:text-probemas-text hover:underline"
            >
              Explore services
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-probemas-primary text-black font-semibold">
                4.9
              </span>
              <div>
                <p className="text-sm text-probemas-muted">Reviews.io rating</p>
                <p className="font-semibold">2,400+ reviews</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-sm text-probemas-muted">Trusted by OSRS players</p>
              <p className="font-semibold">Global coverage • 24/7 support</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-probemas-bgSoft shadow-soft">
            <Image
              src="/hero.png"
              alt="OSRS heroes artwork"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

