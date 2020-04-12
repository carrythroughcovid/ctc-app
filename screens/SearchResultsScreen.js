import React from "react";
import { StyleSheet, View } from "react-native";
import InstantSearch from "../components/InstantSearch";
import Constants from "expo-constants";

import colours from "../utils/colours";

export default function SearchResultsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <InstantSearch navigation={navigation} />
    </View>
  );
}

SearchResultsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colours.backgroundWhite,
  },
});
