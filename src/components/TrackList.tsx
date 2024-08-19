import { TrackListItem } from "@/components/TrackListItem";
import { TrackSeparator } from "@/components/TrackSeparator";
import { screen } from "@/constants/theme";
import { skipToTrack } from "@/utils";
import { FlatList, type FlatListProps } from "react-native";
import type { Track } from "react-native-track-player";
import { EmptyTrackList } from "./EmptyTrackList";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

export const TrackList = ({ tracks, ...props }: TrackListProps) => {
  const onTrackSelect = skipToTrack(tracks);

  return (
    <FlatList
      style={{
        paddingHorizontal: screen.paddingHorizontal,
      }}
      ListEmptyComponent={EmptyTrackList}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 128,
      }}
      contentInsetAdjustmentBehavior="automatic"
      data={tracks}
      ItemSeparatorComponent={TrackSeparator}
      renderItem={({ item }) => <TrackListItem track={item} onTrackSelect={onTrackSelect} />}
      ListFooterComponent={tracks.length > 0 ? TrackSeparator : null}
      {...props}
    />
  );
};
