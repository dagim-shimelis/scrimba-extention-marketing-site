import Image from "next/image";
import { MakerSection } from "@/components/maker-section";
import { chromeWebStore, download, repository } from "@/components/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-copy wrap">
          <p className="eyebrow hero-eyebrow">
            <span /> A LITTLE EXTENSION. A CLEARER PICTURE.
          </p>
          <h1 id="hero-title">
            See how far
            <br />
            <em>you’ve come.</em>
          </h1>
          <p className="hero-description">
            See how far you’ve come, right where you learn.
            <br className="desktop-break" /> Your Scrimba section progress,
            beside the lesson timer.
          </p>
          <a href={chromeWebStore} className="download-button">
            <svg className="chrome-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="#ea4335" />
              <path
                d="M12 12 3.34 7A10 10 0 0 0 12 22l5-8.66Z"
                fill="#34a853"
              />
              <path d="M12 8h9.17A10 10 0 0 1 12 22l5-8.66Z" fill="#fbbc05" />
              <circle cx="12" cy="12" r="4.6" fill="#fff" />
              <circle cx="12" cy="12" r="3.6" fill="#4285f4" />
            </svg>
            <span className="install-label">Install extension</span>
            <span className="install-arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10h10m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <p className="download-note">
            Free &amp; open source · <a href={repository}>View on GitHub ↗</a>
            <br />
            Chrome compatible · <a href="#installation">Install from ZIP</a>
          </p>
        </div>
        <div className="demo wrap">
          <div className="demo-caption">
            <span>YOUR NEXT SMALL WIN</span>
            <span>
              Less checking. More learning. <span aria-hidden="true">↘</span>
            </span>
          </div>
          <div
            className="lesson-demo"
            aria-label="Illustration of a section progress badge beside a lesson timer"
          >
            <div className="lesson-top">
              <span className="lesson-crumb">
                Your course <span>/</span> Your next lesson
              </span>
              <span className="lesson-clock">0:12 / 4:53</span>
              <span className="progress-demo">
                <strong>24%</strong>
                <span className="progress-track">
                  <span />
                </span>
                <span className="time-estimate">≈40 min / 2.8 hrs</span>
              </span>
              <span className="lesson-check" aria-hidden="true">
                ✓
              </span>
            </div>
            <div className="lesson-body">
              <span className="code-decoration" aria-hidden="true">
                01
                <br />
                02
                <br />
                03
              </span>
              <div>
                <span className="code-comment">{"// one lesson closer"}</span>
                <br />
                <span className="code-purple">const</span> progress ={" "}
                <span className="code-green">keepGoing</span>();
                <br />
                <span className="code-comment">
                  {"// you’re making more progress than you think."}
                </span>
              </div>
              <div className="progress-callout">
                <span aria-hidden="true">↖</span> A little perspective,
                <br />
                <em>right on time.</em>
              </div>
            </div>
          </div>
          <div className="feature-line">
            <span>
              <b>01</b> Your section, at a glance
            </span>
            <span>
              <b>02</b> Estimated watched time
            </span>
            <span>
              <b>03</b> Everything stays in your browser
            </span>
          </div>
          <details className="install" id="installation">
            <summary>
              New here? Here’s how to install <span aria-hidden="true">+</span>
            </summary>
            <ol>
              <li>
                <a href={download} download>Download the ZIP</a> and extract it.
              </li>
              <li>
                Open <code>chrome://extensions</code> and turn on Developer
                mode.
              </li>
              <li>
                Select <strong>Load unpacked</strong> and choose the extracted
                folder.
              </li>
              <li>
                Refresh a Scrimba lesson. Open its outline if the badge doesn’t
                appear.
              </li>
            </ol>
            <p>
              Manual installation is available now. Estimated watched time is
              calculated from section completion and rounded duration, not
              actual viewing time.
            </p>
            <Image
              src="/images/section-outline.png"
              width={1502}
              height={750}
              alt="Existing Scrimba capture showing a 24% section badge beside the lesson timer and matching outline progress."
            />
          </details>
        </div>
      </section>
      <div className="maker-area">
        <MakerSection />
      </div>
    </main>
  );
}
