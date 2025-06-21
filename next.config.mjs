/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ Wajib jika pakai next export
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
