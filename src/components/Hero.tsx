import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-probemas-bg to-probemas-bgSoft pb-16 pt-12"
    >
      <div className="page-container grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/70">
            Probemas Services
          </p>
          <div className="space-y-4">
            <h1 className="text-h1-mobile font-bold leading-tight text-yellow md:text-title-desktop font-raleway">
              Maximize Your OSRS Experience
            </h1>
            <p className="text-lg text-white">
              Dominate RuneScape today with trusted boosters, rapid delivery, and transparent progress updates.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://discord.gg/ts7mYuwJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-yellow px-8 py-4 text-lg font-bold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg font-chakra tracking-[-0.56px]"
            >
              Get Started
            </a>
            <a
              href="https://discord.gg/ts7mYuwJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-yellow/20 px-8 py-4 text-lg font-bold text-yellow shadow-soft transition hover:-translate-y-0.5 hover:bg-yellow/30 font-chakra tracking-[-0.56px]"
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
                <p className="text-sm text-white/70">Reviews.io rating</p>
                <p className="font-semibold">2,400+ reviews</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-sm text-white/70">Trusted by OSRS players</p>
              <p className="font-semibold">Global coverage • 24/7 support</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-2xl">
            <Image
              src="/images/ac53d81d-015f-4c9e-b843-4750cfef3d94_removalai_preview.png"
              alt="OSRS heroes artwork"
              width={900}
              height={900}
              priority
              className="w-full h-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] md:-mb-8 select-none pointer-events-none"
              sizes="(min-width: 1024px) 700px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

