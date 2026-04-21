import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    outputFileTracingIncludes: {
        "/blog/[slug]": ["./content/blog/**/*.json"],
        "/blog": ["./content/blog/**/*.json"],
    },
};

export default nextConfig;
