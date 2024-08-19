import { colors } from '@/constants/theme';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import type { SearchBarProps } from 'react-native-screens';

const defaultHeaderSearchBarOptions: SearchBarProps = {
  tintColor: colors.primary,
  hideWhenScrolling: false,
  autoCapitalize: "none",
};

export const useHeaderSearchBar = ({ searchBarOptions }: { searchBarOptions?: SearchBarProps; }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange: SearchBarProps["onChangeText"] = (e: NativeSyntheticEvent<TextInputFocusEventData>): void => setSearchInput(e.nativeEvent.text);
  const resetSearchInput: SearchBarProps["onCancelButtonPress"] = () => setSearchInput("");

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultHeaderSearchBarOptions,
        ...searchBarOptions,
        onChangeText: handleSearchInputChange,
        onCancelButtonPress: resetSearchInput,
      },
    });
  }, [navigation, searchBarOptions]);

  return { searchInput };
};