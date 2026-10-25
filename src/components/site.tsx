import Image from "next/image";
import Link from "next/link";

export const download = "/downloads/scrimba-section-progress-0.1.2.zip";
export const chromeWebStore =
  "https://chromewebstore.google.com/detail/nihjjjbhpjpajidfabhdkcinogfogbgn?utm_source=item-share-cb";
export const repository =
  "https://github.com/dagim-shimelis/Scrimba-section-progress-extention";

export function Header() {
  return (
    <header className="header wrap">
      <Link
        href="/"
        className="brand"
        aria-label="Scrimba Section Progress home"
      >
        <Image src="/images/extension-icon.png" width={38} height={38} alt="" />
        <span>
          section<span className="brand-light">progress</span>
          <span className="brand-dot">.</span>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#maker">The maker</Link>
        <Link href="/support">Support</Link>
        <a
          href={repository}
          className="nav-github"
          aria-label="View source on GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.09c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.63 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a href={chromeWebStore} className="nav-download">
          Install extension <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer wrap">
      <p>A little more clarity. A little more progress.</p>
      <div>
        <a href={repository}>Open source on GitHub ↗</a>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy policy</Link>
        <a href="https://dagim.codes/">Made by Dagim ↗</a>
      </div>
      <small>Unofficial. Not affiliated with or endorsed by Scrimba.</small>
    </footer>
  );
}
