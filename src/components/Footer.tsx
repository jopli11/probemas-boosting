export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-probemas-bgSoft py-12">
      <div className="page-container grid gap-10 md:grid-cols-[1.5fr,1fr,1fr,1fr]">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-probemas-primary to-probemas-accent text-black flex items-center justify-center font-black shadow-soft">
              P
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">Probemas</span>
              <span className="text-xs text-probemas-muted">OSRS Services</span>
            </div>
          </div>
          <p className="text-sm text-probemas-muted">
            Premium OSRS boosting, questing, and raid services delivered by vetted experts.
          </p>
          <div className="flex gap-3 text-sm text-probemas-muted">
            <a className="hover:text-probemas-text" href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="hover:text-probemas-text" href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
            <a className="hover:text-probemas-text" href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Products</h4>
          <ul className="mt-3 space-y-2 text-sm text-probemas-muted">
            <li>OSRS Gold</li>
            <li>RS3 Gold</li>
            <li>Services</li>
            <li>Accounts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">More</h4>
          <ul className="mt-3 space-y-2 text-sm text-probemas-muted">
            <li>Loyalty Program</li>
            <li>Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Need help?</h4>
          <ul className="mt-3 space-y-2 text-sm text-probemas-muted">
            <li>24/7 live chat</li>
            <li>support@probemas.com</li>
            <li>Vilnius, Lithuania</li>
          </ul>
        </div>
      </div>
      <div className="page-container mt-10 flex flex-col gap-2 border-t border-white/5 pt-4 text-sm text-probemas-muted md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Probemas. All rights reserved.</span>
        <span>services.probemas.com</span>
      </div>
    </footer>
  );
}

