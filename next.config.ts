/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  experimental: {
    outputFileTracingIncludes: {
      "/api/screenshot": ["./node_modules/@sparticuz/chromium/**"],
    },
  },
};

export default nextConfig;
