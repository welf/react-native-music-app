import { Stack } from "expo-router";

const NavigationScreen = () => (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen
      name="player"
      options={{
        presentation: "card",
        gestureEnabled: true,
        gestureDirection: "vertical",
        animationDuration: 250,
        headerShown: false,
      }}
    />
  </Stack>
);

export default NavigationScreen;
