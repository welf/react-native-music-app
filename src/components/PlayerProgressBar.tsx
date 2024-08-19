import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

export const PlayerProgressBar = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    height: 4,
    backgroundColor: colors.textMuted,
  },
});
