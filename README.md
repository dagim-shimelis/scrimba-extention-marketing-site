<div align="center">
  <img src="public/images/extension-icon.png" alt="Scrimba Section Progress icon" width="80" />

  <h1>Scrimba Section Progress</h1>
  <p><strong>A little extension. A clearer picture.</strong></p>
  <p>The website for an unofficial browser extension that brings section progress<br />and estimated watched time beside your Scrimba lesson timer.</p>

  <p>
    <a href="https://scrimba-progress.dagim.codes/">Visit the website</a> ·
    <a href="https://github.com/dagim-shimelis/Scrimba-section-progress-extention">Extension source</a> ·
    <a href="https://scrimba-progress.dagim.codes/privacy">Privacy policy</a>
  </p>
</div>

---

## About this repository

This repository contains the **marketing website**, built with Next.js, React, TypeScript, and Tailwind CSS. The browser extension is maintained in its [own repository](https://github.com/dagim-shimelis/Scrimba-section-progress-extention).

The site includes:

- A responsive landing page with an illustrated progress badge.
- A downloadable extension ZIP and an expandable installation guide.
- A privacy policy explaining the extension’s local data processing.
- A maker section introducing Dagim and his other projects.

Fonts and images are served locally. The site includes no analytics, advertising, or tracking cookies.

## Run locally

With Node.js and npm installed:

```sh
git clone https://github.com/dagim-shimelis/scrimba-extention-marketing-site.git
cd scrimba-extention-marketing-site
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables or external services are required for local development.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

## Find your way around

```text
src/
├── app/
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Shared layout and metadata
│   ├── globals.css        # Site styles
│   └── privacy/page.tsx   # Privacy policy
└── components/
    ├── site.tsx           # Header, footer, and extension links
    ├── maker-section.tsx  # About the maker
    └── maker.css          # Maker card styles
public/
├── downloads/             # Packaged extension ZIP
├── fonts/                 # Local fonts and their license files
└── images/                # Icons, project artwork, and extension capture
```

## Update the extension download

1. Build the release ZIP in the [extension repository](https://github.com/dagim-shimelis/Scrimba-section-progress-extention).
2. Replace the bundled ZIP in `public/downloads/`.
3. Update the `download` path in `src/components/site.tsx`.
4. Keep `src/app/privacy/page.tsx` aligned with the extension’s `PRIVACY.md`.
5. Run lint and build, then check the download and installation instructions.

The current download uses Chrome’s **Load unpacked** installation flow. If a Chrome Web Store listing becomes available, update the links and installation copy in `src/components/site.tsx` and `src/app/page.tsx`.

## Contributing

Found a broken link, a layout issue, or unclear copy? [Open an issue](https://github.com/dagim-shimelis/scrimba-extention-marketing-site/issues) or submit a focused pull request. Include a short explanation of the change and run `npm run lint` and `npm run build` before submitting.

For bugs in the extension itself, use the [extension issue tracker](https://github.com/dagim-shimelis/Scrimba-section-progress-extention/issues).

## Credits

Made by [Dagim Shimelis](https://dagim.codes/). The maker section is adapted from the Sheriff website. Font license files are included in `public/fonts/`.

Scrimba Section Progress is an independent project, not affiliated with or endorsed by Scrimba.
