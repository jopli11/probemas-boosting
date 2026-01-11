import Image from "next/image";

export function DiscordSection() {
  return (
    <section className="py-16">
      <div className="page-container grid gap-8 lg:grid-cols-2">
        <div className="card-surface relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-yellow/10" />
          <div className="relative space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Discord
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-probemas-bg/80 px-3 py-1 text-xs font-semibold text-white shadow-soft ring-1 ring-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                6,500+ members active
              </span>
            </div>
            <h3 className="text-h3-mobile font-bold font-raleway md:text-h3-desktop text-white">Join Our Discord Services Server</h3>
            <p className="text-white/70">
              Connect with staff, open tickets, and get real-time updates on your orders.
            </p>
            <ul className="space-y-2 text-sm text-white">
              <li>• 24/7 live chat support</li>
              <li>• Dedicated ticket channels per order</li>
              <li>• Progress updates and media attachments</li>
            </ul>
            <a
              href="https://discord.gg/ts7mYuwJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#5865F2] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Get Started on Discord
            </a>
          </div>
        </div>

        <div className="card-surface p-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-probemas-bgSoft shadow-soft">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/maxresdefault.jpg"
                alt="Discord community preview"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

