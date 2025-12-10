export function DiscordSection() {
  return (
    <section className="py-16">
      <div className="page-container grid gap-8 lg:grid-cols-2">
        <div className="card-surface relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-probemas-primary/10" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-probemas-muted">
              Discord
            </p>
            <h3 className="text-2xl font-semibold">Join Our Discord Services Server</h3>
            <p className="text-probemas-muted">
              Connect with staff, open tickets, and get real-time updates on your orders.
            </p>
            <ul className="space-y-2 text-sm text-probemas-muted">
              <li>• 24/7 live chat support</li>
              <li>• Dedicated ticket channels per order</li>
              <li>• Progress updates and media attachments</li>
            </ul>
            <a
              href="https://discord.com/invite/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#5865F2] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Get Started on Discord
            </a>
          </div>
        </div>

        <div className="card-surface p-6">
          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/5 px-4 py-10 text-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-probemas-muted">
                Discord Widget Placeholder
              </p>
              <p className="mt-2 text-probemas-muted">
                Swap this with the live widget or branded screenshot from Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

