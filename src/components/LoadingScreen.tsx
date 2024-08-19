import { colors } from "@/constants/theme";
import { defaultStyles } from "@/styles";
import { ActivityIndicator, View } from "react-native";
import { DismissSymbol } from "./DismissSymbol";

export const LoadingScreen = () => (
  <View style={[defaultStyles.container, { justifyContent: "center" }]}>
    <DismissSymbol />
    <ActivityIndicator color={colors.icon} />
  </View>
);
