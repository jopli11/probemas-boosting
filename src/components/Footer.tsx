export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-probemas-bgSoft py-12">
      <div className="page-container flex flex-col gap-6 text-sm text-probemas-muted md:flex-row md:items-center md:justify-between">
        <span className="text-probemas-text font-semibold">Probemas Services</span>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://discord.gg/ts7mYuwJ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-probemas-primary px-4 py-2 text-sm font-semibold text-black shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Join Discord
          </a>
          <span>© {new Date().getFullYear()} Probemas</span>
        </div>
      </div>
    </footer>
  );
}

