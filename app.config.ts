export default {
  "expo": {
    "name": "Calculator-devcomma",
    "slug": "calculator-app",
    "version": "1.0.2",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.devcomma.calculator"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.devcomma.calculator"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": [
        "js",
        "jsx",
        "ts",
        "tsx",
        "scss",
        "sass"
      ]
    },
    "extra": {
      "eas": {
        "projectId": "7c14f06e-0537-4f6d-a3eb-fb2f4b70b958"
      }
    }
  }
}
