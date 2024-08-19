import {
  PlayPauseButton,
  SkipToNextButton,
  SkipToPreviousButton,
} from "@/components/PlayerControls";
import { unknownTrackImageUri } from "@/constants/images";
import { colors } from "@/constants/theme";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import { AnimatedText } from "./AnimatedText";

export const FloatingPlayer = () => {
  const router = useRouter();

  const activeTrack = useActiveTrack();

  const showPlayer = () => {
    router.navigate("/player");
  };

  if (!activeTrack) return null;

  return (
    <TouchableOpacity onPress={showPlayer} activeOpacity={0.9} style={styles.player}>
      <>
        {/* Image */}
        <FastImage
          source={{
            uri: activeTrack?.artwork ?? unknownTrackImageUri,
          }}
          style={styles.image}
        />
        {/* Title */}
        <View style={styles.titleContainer}>
          <AnimatedText style={styles.title} text={activeTrack.title ?? ""} animatedTreshold={25} />
        </View>
        {/* Controls */}
        <View style={styles.controlsContainer}>
          <SkipToPreviousButton iconSize={24} />
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={24} />
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  player: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 78,
    backgroundColor: colors.playerBackground,
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderRadius: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
  },
  title: {
    ...defaultStyles.text,
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 10,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginRight: 16,
    columnGap: 24,
  },
});
