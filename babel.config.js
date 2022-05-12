module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@src': './src',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@components': './src/components',
            '@services': './src/services',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
