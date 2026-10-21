import type { Metadata } from "next";
import { Header, Footer } from "@/components/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Scrimba Section Progress — See how far you’ve come",
    template: "%s | Scrimba Section Progress",
  },
  description:
    "Keep your Scrimba section progress beside the lesson timer. A small, free browser extension with completion percentages and estimated watched time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
