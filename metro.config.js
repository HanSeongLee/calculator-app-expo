const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = (async () => {
    const {
        resolver: { sourceExts }
    } = await defaultConfig;
    return {
        transformer: {
            babelTransformerPath: require.resolve("react-native-sass-transformer"),
            assetPlugins: ['expo-asset/tools/hashAssetFiles'],
        },
        resolver: {
            sourceExts: [...sourceExts, "scss", "sass"]
        }
    };
})();
