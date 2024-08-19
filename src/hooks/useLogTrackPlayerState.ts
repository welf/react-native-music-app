import { Event, useTrackPlayerEvents } from "react-native-track-player";

const events = [Event.PlaybackActiveTrackChanged, Event.PlaybackState, Event.PlaybackError];

export const useLogTrackPlayerState = () => {
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn(event.type, event);
    } else {
      console.log(event.type, event);
    }
  });
};
