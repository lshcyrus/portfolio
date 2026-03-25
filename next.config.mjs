/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    // Silence the "Turbopack with webpack config" mismatch error on Next 16.
    // Keeps dev server on Turbopack by providing an explicit (empty) config.
    turbopack: {},
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: 'canvas' }];  // required for Three.js
        return config;
    },
};

export default nextConfig;
