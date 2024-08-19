import { StackScreenWithSearchBarOptions } from "@/constants/layout-options";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBarOptions, headerTitle: "Artists" }}
        />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;
