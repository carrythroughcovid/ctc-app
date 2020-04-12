import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InstantSearch from "../components/InstantSearch";

import colours from "../utils/colours";

export default function SearchResultsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.inputContainer}>
          <InstantSearch navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

SearchResultsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: colours.backgroundWhite,
  },
  inputContainer: {
    marginTop: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colours.backgroundGrey,
  },
  paddingContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
