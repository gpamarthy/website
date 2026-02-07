export const dynamic = "force-static";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gpamarthy.github.io/new-website/";

  return [
    {
      url: siteUrl,
      lastModified: "2026-01-01"
    }
  ];
}
