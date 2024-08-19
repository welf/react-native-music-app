import { useEffect, useRef } from "react";
import TrackPlayer, { RepeatMode } from "react-native-track-player";

const setupTrackPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxBuffer: 60, // buffer the audio for 60 seconds
    maxCacheSize: 10 * 1024, // Android only
  });

  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  await TrackPlayer.setVolume(0.5);
};

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  const isPlayerReady = useRef(false);
  useEffect(() => {
    setupTrackPlayer()
      .then(() => {
        isPlayerReady.current = true;
        if (onLoad) {
          onLoad();
        }
      })
      .catch((err) => {
        isPlayerReady.current = false;
        console.error("Error setting up TrackPlayer:", err);
      });
  }, [onLoad]);
};
