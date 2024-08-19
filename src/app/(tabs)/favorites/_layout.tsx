import { StackScreenWithSearchBarOptions } from "@/constants/layout-options";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const FavoritesScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBarOptions, headerTitle: "Favorites" }}
        />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;
