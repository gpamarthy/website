import "./globals.css";
import Analytics from "../components/analytics";
import SiteNav from "../components/site-nav";
import SkipLink from "../components/skip-link";
import ThemeProvider from "../components/theme-provider";
import { siteConfig, socialLinks } from "./data/site";

const metadataBase = new URL(siteConfig.canonicalUrl);

export const metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.name} | Offensive Security Engineer`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Declassified enterprise portfolio focused on offensive security, cloud risk reduction, and executive-ready remediation.",
  alternates: {
    canonical: siteConfig.canonicalUrl
  },
  openGraph: {
    title: `${siteConfig.name} | Offensive Security Engineer`,
    description:
      "Offensive security engineer portfolio featuring cloud defense, red team operations, and security program leadership.",
    url: metadataBase,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-card.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Offensive Security Engineer`,
    description:
      "Offensive security engineer portfolio featuring cloud defense, red team operations, and security program leadership.",
    images: ["/images/og-card.svg"]
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Offensive Security Engineer",
    url: siteConfig.canonicalUrl,
    email: siteConfig.email,
    sameAs: socialLinks.filter((link) => link.external).map((link) => link.href)
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-main">
        <ThemeProvider>
          <SkipLink />
          <Analytics />
          <div className="surface-bg min-h-screen">
            <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6">
              <SiteNav />
              <main className="pt-10" id="content">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(jsonLd)}
        </script>
      </body>
    </html>
  );
}
