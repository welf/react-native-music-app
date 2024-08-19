import { colors, fontSize } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text,
  },
});

export const utilStyles = StyleSheet.create({
  listItemSeparator: {
    borderColor: colors.textMuted,
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.3,
  },
});
