/** @type {import('next').NextConfig} */
const nextConfig = {
    // typescript: {
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true,
    //   },
      
        experimental: {
          turbo: {
            rules: {
              '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
              },
            },
          },
        },
      
};

export default nextConfig;
