import Image from "next/image";
import { Arrow, Badge } from "./icons";

export function MakerSection() {
  return (
    <section
      className="maker-section wrap"
      id="maker"
      aria-labelledby="maker-title"
    >
      <div className="maker-copy">
        <p className="eyebrow">A NOTE FROM THE BUILDER</p>
        <h2 id="maker-title">
          Hi, I’m <em>Dagim.</em>
        </h2>
        <div className="maker-story">
          <p>
            I’m a frontend developer based in Addis Ababa. I build tools that
            make everyday work a little easier.
          </p>
          <p>
            Dwight Prompt Assistant helps you write better prompts. TriggerNote
            brings your notes into view on the websites where you need them. And
            Sheriff helps keep your code covered as it grows.
          </p>
          <p>
            Different tools, same idea: less busywork, more room for the work
            you care about.
          </p>
        </div>
        <a className="maker-link" href="https://dagim.codes/">
          More about me <Arrow />
        </a>
        <div className="maker-signature">
          <Image
            src="/images/dagim.webp"
            alt="Dagim working at his desk"
            width={56}
            height={56}
          />
          <div>
            <p>Dagim Shimelis</p>
            <span>Independent developer &amp; maker</span>
          </div>
        </div>
      </div>
      <figure className="maker-projects">
        <div className="maker-apps">
          <a
            className="maker-app maker-app-dwight"
            href="https://www.dwightprompt.com/"
          >
            <Image src="/images/dwight.png" alt="" width={100} height={100} />
            <span className="maker-app-name">Dwight</span>
            <span className="maker-app-detail">Prompt Assistant</span>
            <Arrow />
          </a>
          <a
            className="maker-app maker-app-triggernote"
            href="https://trigger-note.com/"
          >
            <Image
              src="/images/triggernote.svg"
              alt=""
              width={100}
              height={100}
            />
            <span className="maker-app-name">TriggerNote</span>
            <span className="maker-app-detail">Notes in context</span>
            <Arrow />
          </a>
          <a
            className="maker-app maker-app-sheriff"
            href="https://sheriff-website-omega.vercel.app/"
          >
            <Badge className="maker-app-icon" />
            <span className="maker-app-name">sheriff.</span>
            <span className="maker-app-detail">Tests that keep up</span>
            <Arrow />
          </a>
        </div>
        <figcaption>A few things I’ve put into the world.</figcaption>
      </figure>
    </section>
  );
}
