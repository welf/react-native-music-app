import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/theme";
import { defaultStyles } from "@/styles";
import { loadTrack, pauseTrack, playTrack } from "@/utils";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import LoaderKit from "react-native-loader-kit";
import { type Track, useActiveTrack, useIsPlaying } from "react-native-track-player";

export const TrackListItem = ({ track, onTrackSelect }: TrackListItemProps) => {
  const isActive = useActiveTrack()?.url === track.url;

  const { playing } = useIsPlaying();

  const handleTrackSelect = () => {
    if (isActive) {
      if (playing) {
        pauseTrack();
      } else {
        playTrack();
      }
    } else {
      loadTrack(track);
      onTrackSelect(track);
      playTrack();
    }
  };

  return (
    <TouchableHighlight onPress={handleTrackSelect}>
      {/* Track container */}
      <View style={styles.container}>
        {/* Track image */}
        <View>
          <FastImage
            style={{
              ...styles.image,
              opacity: isActive ? 0.6 : 1,
            }}
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
          />
          {isActive &&
            (playing ? (
              <LoaderKit
                style={styles.playPauseIcon}
                name="LineScalePulseOut"
                color={colors.icon}
              />
            ) : (
              <Ionicons name="play" size={24} color={colors.icon} style={styles.playPauseIcon} />
            ))}
        </View>
        {/* Wrapper for track info and track options  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          {/* Track info wrapper  */}
          <View>
            {/* Track title */}
            <Text
              numberOfLines={1}
              style={{
                ...styles.titleText,
                color: isActive ? colors.primary : colors.text,
              }}
            >
              {track.title}
            </Text>
            {/* Artist name  */}
            {track.artist && (
              <Text numberOfLines={1} style={styles.artistText}>
                {track.artist}
              </Text>
            )}
          </View>
          {/* Options icon */}
          <View>
            <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export type TrackListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => Promise<void>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
  },
  playPauseIcon: {
    position: "absolute",
    top: 14,
    left: 14,
    width: 24,
    height: 24,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  titleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    // maxWidth: "90%",
  },
  artistText: {
    ...defaultStyles.text,
    fontSize: fontSize.xs,
    color: colors.textMuted,
    marginTop: 4,
  },
});
