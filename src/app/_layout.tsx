import {
  // useLogTrackPlayerState,
  useSetupTrackPlayer,
} from "@/hooks";
import NavigationScreen from "@/screens/NavigationScreen";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync(); // do not hide splash screen until the TrackPlayer is ready

const App = () => {
  const hideSplashScreen = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  // setup TrackPlayer
  useSetupTrackPlayer({
    onLoad: hideSplashScreen,
  });

  // log TrackPlayer state changes
  // useLogTrackPlayerState();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationScreen />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
