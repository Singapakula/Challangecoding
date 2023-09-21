module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ["./src"],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@app/screens': "./src/screens",
        '@app/components':'./src/components',
        '@app/constants':'./src/constants',
        '@app/assets':'./src/assets',
        '@app/navigations':'./src/navigations'

      }
    }]
  ]
};
