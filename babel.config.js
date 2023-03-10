module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ['module-resolver', {
          alias: {
            components: './src/components',
            containers: './src/containers',
            screens: './src/screens',
            lib: './lib',
            styles: './styles',
            types: './types'
          }
        }]
    ]
  };
};
