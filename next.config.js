/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/bcavazos-dev',
  assetPrefix: '/bcavazos-dev/',
}

module.exports = nextConfig
