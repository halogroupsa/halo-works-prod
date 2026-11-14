import FloatingActions from "@/components/floating-actions";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SiteFrame from "@/components/site-frame";
import "./globals.css";
import "./architecture.css";
import "./presentation.css";
import { JsonLd } from "@/components/seo";
import ProductionGate from "@/components/production-gate";
import { organization, siteUrl } from "@/lib/seo";

const display = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--halo-display",
  weight: "200 800",
});
const body = localFont({
  src: "./fonts/assistant.woff2",
  variable: "--halo-body",
  weight: "200 800",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Halo Works | Interior projects. Specialist teams.",
    template: "%s | Halo Works",
  },
  description:
    "Interior design coordination, fit-out, bespoke joinery, renovation and approvals for homes, workplaces, hospitality and retail spaces in Dubai.",
  openGraph: {
    type: "website",
    siteName: "Halo Works",
    images: [{ url: "/images/hero-courtyard.webp", width: 1774, height: 887 }],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <ProductionGate />
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter id="hero-photo-balance" colorInterpolationFilters="sRGB">
              <feComponentTransfer>
                <feFuncR type="table" tableValues="0 .239 .484 .739 1" />
                <feFuncB type="table" tableValues="0 .272 .525 .766 1" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organization} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "Halo Works",
            publisher: { "@id": `${siteUrl}/#organization` },
          }}
        />
        <SiteFrame
          header={<Header />}
          footer={<Footer />}
          floatingActions={<FloatingActions />}
        >
          {children}
        </SiteFrame>
      </body>
    </html>
  );
}
