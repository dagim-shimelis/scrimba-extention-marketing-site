# Scrimba Section Progress — marketing site

Next.js landing page and `/privacy` policy for the unofficial Scrimba Section Progress browser extension.

## Local development

```sh
npm install
npm run dev
```

## Checks and production preview

```sh
npm run lint
npm run build
npm start
```

The site uses local fonts and assets, without analytics or advertising. The maker section is adapted from the Sheriff website.

## Downloads and publishing

The download buttons serve `public/downloads/scrimba-section-progress-0.1.2.zip`, built from the companion extension repository. Installation instructions explain the manual Load unpacked flow. When a Chrome Web Store listing is available, update the calls to action in `src/components/site.tsx` and `src/app/page.tsx` to link to it and update the installation copy.

For a new extension release, rebuild its ZIP, replace the bundled download, and update `download` in `src/components/site.tsx`. Keep the policy in `src/app/privacy/page.tsx` synchronized with the extension's `PRIVACY.md`.

Deploy this repository to a Next.js-compatible host. Use the deployed `/privacy` URL in the Chrome Web Store dashboard after confirming it is publicly accessible. No deployment is configured by this implementation.

The hero badge is an illustrative example. The expandable installation guide includes an existing authentic extension capture; it is not evidence of fresh runtime testing. The extension icon is original artwork as confirmed by its owner. Fonts include their OFL license files under `public/fonts`.
