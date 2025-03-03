/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio" : "",
  env: {
    BASE_PATH: process.env.NODE_ENV === "production" ? "/Portfolio" : ""
  },

  reactStrictMode: true,

  trailingSlash: true,
};

export default nextConfig;
