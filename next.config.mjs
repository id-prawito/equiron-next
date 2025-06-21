/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ini wajib
  trailingSlash: true, // agar hasil build jadi index.html per folder (lebih compatible)
  images: {
    unoptimized: true, // wajib kalau pakai <Image /> dan export
  },
  compiler: {
    styledComponents: true, // kalau kamu pakai styled-components
  },
};

export default nextConfig;
