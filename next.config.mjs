/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // opsional
  images: {
    domains: ["equironandco.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
