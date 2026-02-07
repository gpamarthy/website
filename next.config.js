/** @type {import('next').NextConfig} */
const enableRuntimeHeaders = process.env.ENABLE_RUNTIME_HEADERS === "true";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath !== undefined ? configuredBasePath : "/new-website";

const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`
      }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  },
  ...(enableRuntimeHeaders
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                {
                  key: "Content-Security-Policy",
                  value:
                    "default-src 'self'; script-src 'self' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' https://plausible.io; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
                },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                { key: "X-XSS-Protection", value: "0" },
                { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }
              ]
            }
          ];
        }
      }
    : {})
};

module.exports = nextConfig;
