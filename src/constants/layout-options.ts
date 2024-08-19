import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./theme";

export const StackScreenWithSearchBarOptions: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: "prominent",
  headerShadowVisible: false,
};
