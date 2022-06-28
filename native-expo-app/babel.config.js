module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            src: './src',
            assets: './assets',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        },
      ],
    ],
  };
};
