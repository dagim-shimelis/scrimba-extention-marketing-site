import type { Metadata } from "next";
import Link from "next/link";
import { download, repository } from "@/components/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Installation help, troubleshooting, and support for the Scrimba Section Progress browser extension.",
};

export default function Support() {
  return (
    <main id="main" className="support wrap">
      <Link href="/" className="back-link">
        ← Back to the extension
      </Link>
      <p className="eyebrow">A LITTLE HELP TO KEEP GOING</p>
      <h1>
        Stuck somewhere?
        <br />
        <em>Let’s sort it out.</em>
      </h1>
      <p className="support-intro">
        Get set up, find a quick fix, or reach out about the extension.
      </p>
      <article>
        <h2>Install the extension</h2>
        <ol>
          <li><a href={download} download>Download the extension ZIP</a> and extract it.</li>
          <li>Open <code>chrome://extensions</code> in Chrome and turn on Developer mode.</li>
          <li>Select <strong>Load unpacked</strong> and choose the extracted folder containing <code>manifest.json</code>.</li>
          <li>Open or refresh a Scrimba lesson. Your section progress appears beside the lesson timer.</li>
        </ol>

        <h2>The progress badge isn’t showing</h2>
        <p>
          Check that Scrimba Section Progress is enabled in Chrome’s extensions
          settings, then refresh the lesson page. Open the lesson outline so the
          extension can read the section’s progress and duration.
        </p>
        <p>
          If it still doesn’t appear, include the steps you tried when reporting
          the issue below.
        </p>

        <h2>Why does the watched time look different?</h2>
        <p>
          Watched time is an estimate based on section completion and the
          displayed, rounded section duration. It doesn’t track how long you
          actually watch, so replays and playback speed aren’t reflected.
        </p>

        <h2>Disable or remove the extension</h2>
        <p>
          Open <code>chrome://extensions</code> and switch the extension off or
          select <strong>Remove</strong>. Refresh any open Scrimba tabs to clear
          the badge. Read the <Link href="/privacy">privacy policy</Link> for
          details about local data processing.
        </p>

        <h2>Still need a hand?</h2>
        <p>
          <a href={`${repository}/issues`}>Check existing issues</a> or{" "}
          <a href={`${repository}/issues/new`}>report a bug or ask a question on GitHub</a>.
          A GitHub account is required to post.
        </p>
        <p>
          Include your browser and extension versions, what you expected to
          happen, what happened instead, and the steps to reproduce it. GitHub
          issues are public; leave out account details and private information.
        </p>
        <p>
          This is an independent project. For help with a Scrimba subscription,
          billing, or course access, contact Scrimba directly.
        </p>
      </article>
    </main>
  );
}
