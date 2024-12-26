import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   output: "export", // Enables static export mode
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true, // Ensures images work in static export
  },
};

export default bundleAnalyzer(nextConfig);
