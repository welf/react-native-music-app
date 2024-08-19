import TrackPlayer, { Track } from "react-native-track-player";

export const pauseTrack = async () =>
  TrackPlayer.pause().catch((err) => console.error("Pausing track error:", err));

export const playTrack = async () =>
  TrackPlayer.play().catch((err) => console.error("Playing track error:", err));

export const loadTrack = (track: Track) =>
  TrackPlayer.load(track).catch((err) => console.error("Loading track error:", err));

export const skipToTrack = (tracks: Track[]) => async (selectedTrack: Track) => {
  try {
    //   const currentTrack = useActiveTrack();
    //   console.log("currentTrack", currentTrack);
    // const trackIndex = tracks.findIndex((t) => t.url === selectedTrack.url);
    // await TrackPlayer.skip(trackIndex);
    // if (currentTrack) {
    //   await playTrack();
    // }
  } catch (err) {
    console.error("Skipping to track error:", err);
  }
};

export const playNextTrack = async () => {
  await TrackPlayer.skipToNext();
  await playTrack();
};

export const playPreviousTrack = async () => {
  await TrackPlayer.skipToPrevious();
  await playTrack();
};

export const setTrackQueue = async (tracks: Track[]) => {
  await TrackPlayer.reset();
  await TrackPlayer.add(tracks);
};
