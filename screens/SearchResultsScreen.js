import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InstantSearch from "../components/InstantSearch";

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
    flex: 1,
    padding: 0,
    paddingHorizontal: 20,
    backgroundColor: colours.backgroundWhite,
  },
});
