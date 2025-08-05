import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless", // Allows YouTube embeds and similar
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin", // Required with COEP
          },
        ],
      },
    ];
  },
};

export default nextConfig;