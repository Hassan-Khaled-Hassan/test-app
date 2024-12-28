

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   output: "export", // Enables static export mode
  images: {
    domains: ["res.cloudinary.com"],
    // unoptimized: true, // Ensures images work in static export
  },
};

export default nextConfig;
