import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Scrimba Section Progress processes lesson information locally in your browser.",
};
export default function Privacy() {
  return (
    <main id="main" className="privacy wrap">
      <Link href="/" className="back-link">
        ← Back to the extension
      </Link>
      <p className="eyebrow">YOUR PROGRESS IS YOUR BUSINESS</p>
      <h1>
        Small extension.
        <br />
        <em>Clear privacy.</em>
      </h1>
      <p className="policy-date">Privacy policy · Effective October 25, 2026</p>
      <article>
        <p>
          Scrimba Section Progress is an independent browser extension
          maintained by Dagim Shimelis. It is not affiliated with Scrimba.
        </p>
        <h2>Information processed</h2>
        <p>
          The extension runs on <code>https://scrimba.com/*</code>. On lesson
          pages it reads the current lesson URL path, section name, completion
          percentage, and displayed section duration from the page. It uses this
          information only to display section progress and estimated watched
          time beside the lesson timer.
        </p>
        <h2>Storage and sharing</h2>
        <p>
          This information is processed locally in your browser. Section
          information and outline-attempt state are cached temporarily in the
          page&#x27;s memory and are discarded when the page reloads or closes.
          The extension does not write this information to cookies, local
          storage, browser extension storage, or a database.
        </p>
        <p>
          The extension does not send lesson or section data to the developer or any third party,
          sell data, include analytics or advertising, or load remote code. It
          does not access passwords, authentication cookies, or payment
          information. No separate extension account is required.
        </p>
        <p>
          On a fresh install, the extension opens this website once in a new
          tab. It does not attach lesson data or tracking parameters to the URL.
          Updates, extension reloads, and browser restarts do not reopen the
          site. This visit makes normal website requests, as described under
          &ldquo;This website&rdquo; below.
        </p>
        <p>
          The extension may briefly open the lesson outline to read section
          data. Scrimba itself may make requests while rendering its own
          interface; Scrimba&#x27;s website and its data handling are governed
          by its own privacy policy.
        </p>
        <h2>Your choices</h2>
        <p>
          You can disable or uninstall the extension through Chrome&#x27;s
          extensions settings. Reload or close existing Scrimba tabs to remove
          the injected interface and clear its in-memory data. There is no
          developer-held user data to delete.
        </p>
        <h2>Changes and contact</h2>
        <p>
          Any changes to this policy will be published here with a revised
          effective date. For questions, contact the maintainer through{" "}
          <a href="https://github.com/dagim-shimelis/Scrimba-section-progress-extention/issues">
            the project’s GitHub issues
          </a>
          . Do not include private lesson or account information in a public
          issue.
        </p>
        <h2>This website</h2>
        <p>
          This marketing site does not include analytics, advertising, or
          tracking cookies. Fonts and images are served from the site itself.
          Its hosting provider may process standard request information, such as
          IP addresses and browser information, to deliver and secure the
          website. The extension’s local-only data handling described above is
          separate from visiting this site.
        </p>
      </article>
    </main>
  );
}
