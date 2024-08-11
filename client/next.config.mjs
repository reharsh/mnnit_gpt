/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "www.google.com"],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./cache/**/*"],
    },
  },
};

export default nextConfig;
