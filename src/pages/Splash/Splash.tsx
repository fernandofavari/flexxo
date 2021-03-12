import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

// Show the splash for two seconds and then auto hide:
SplashScreen.show({
  showDuration: 8000,
  autoHide: true
});