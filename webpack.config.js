const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add more aliases
  config.resolve.alias = {
    ...config.resolve.alias,
    // Use Preact aliases
    react$: 'preact/compat',
    'react-dom$': 'preact/compat',
    // Fix the responder system which react-native-web depends on
    'react-dom/unstable-native-dependencies$': 'preact-responder-event-plugin',
  };

  // Optionally you can enable the bundle size report. 
  // It's best to do this only with production builds.
  if (env.mode === 'production') {
    config.plugins.push(new BundleAnalyzerPlugin({
      path: 'web-report',
    }));
  }
  return config;
};