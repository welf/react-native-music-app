import { colors } from "@/constants/theme";
import { playNextTrack, playPreviousTrack } from "@/utils";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

export const PlayPauseButton = ({ iconSize, style }: PlayerControlsProps) => {
  const { playing } = useIsPlaying();

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
      >
        <FontAwesome6 name={playing ? "pause" : "play"} color={colors.text} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export const SkipToNextButton = ({ iconSize }: PlayerControlsProps) => {
  const nextTrack = () => playNextTrack();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={nextTrack}>
      <FontAwesome6 name="forward" color={colors.text} size={iconSize} />
    </TouchableOpacity>
  );
};

export const SkipToPreviousButton = ({ iconSize }: PlayerControlsProps) => {
  const previousTrack = () => playPreviousTrack();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={previousTrack}>
      <FontAwesome6 name="backward" color={colors.text} size={iconSize} />
    </TouchableOpacity>
  );
};

export type PlayerControlsProps = {
  iconSize: number;
  style?: ViewStyle;
};
