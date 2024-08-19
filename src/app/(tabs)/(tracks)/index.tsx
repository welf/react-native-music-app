import tracks from "@/assets/data/mock-data.json";
import { TrackList } from "@/components";
import { useHeaderSearchBar } from "@/hooks";
import { defaultStyles } from "@/styles";
import { tracksFilter } from "@/utils";
import { useMemo } from "react";
import { View } from "react-native";

const TracksScreen = () => {
  const { searchInput } = useHeaderSearchBar({
    searchBarOptions: {
      placeholder: "Search in tracks...",
    },
  });

  const filteredTracks = useMemo(() => tracks.filter(tracksFilter(searchInput)), [searchInput]);

  return (
    <View style={defaultStyles.container}>
      <TrackList tracks={filteredTracks} />
    </View>
  );
};

export default TracksScreen;
