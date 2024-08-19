import { unknownTrackImageUri } from "@/constants/images";
import { colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

export const EmptyTrackList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>There are no tracks to display</Text>
    <FastImage
      source={{
        uri: unknownTrackImageUri,
        priority: FastImage.priority.normal,
      }}
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: colors.textMuted,
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    opacity: 0.3,
    marginTop: 40,
  },
});
