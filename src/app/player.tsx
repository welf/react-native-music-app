import { AnimatedText, DismissSymbol, LoadingScreen, PlayerProgressBar } from "@/components";
import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize, screen } from "@/constants/theme";
import { defaultStyles } from "@/styles";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

const PlayerScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const activeTrack = useActiveTrack();

  const isFavorite = true;

  if (!activeTrack) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <DismissSymbol />
      <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{
              uri: activeTrack.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.high,
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>

        <View style={styles.playerContainer}>
          <View style={styles.player}>
            <View style={styles.trackInfoContainer}>
              <View style={styles.trackInfo}>
                {/* Track title */}
                <View style={styles.trackTitle}>
                  <AnimatedText
                    text={activeTrack?.title ?? ""}
                    animatedTreshold={30}
                    style={styles.trackTitleText}
                  />
                </View>
                {/* Favourite icon */}
                <FontAwesome
                  name={isFavorite ? "heart" : "heart-o"}
                  size={20}
                  color={isFavorite ? colors.primary : colors.icon}
                  style={styles.favoriteIcon}
                />
              </View>
              {activeTrack?.artist && (
                <Text numberOfLines={1} style={styles.artist}>
                  {activeTrack.artist}
                </Text>
              )}
            </View>
            <PlayerProgressBar />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...defaultStyles.container,
    paddingHorizontal: screen.paddingHorizontal,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    height: "45%",
    // set the background color to calculate shadow efficiently
    backgroundColor: "#000",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    resizeMode: "cover",
  },
  playerContainer: {
    flex: 1,
  },
  player: {
    marginTop: "auto",
  },
  trackInfoContainer: {
    height: 60,
  },
  trackInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackTitle: {
    flex: 1,
    overflow: "hidden",
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.lg,
    fontWeight: "700",
  },
  favoriteIcon: {
    marginHorizontal: 14,
  },
  artist: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: "90%",
    marginTop: 6,
  },
});

export default PlayerScreen;
