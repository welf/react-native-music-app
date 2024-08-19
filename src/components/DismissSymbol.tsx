import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const DismissSymbol = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { top: top + 8 }]}>
      <View accessible={false} style={styles.symbol} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  symbol: {
    width: 150,
    height: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
    opacity: 0.7,
  },
});
