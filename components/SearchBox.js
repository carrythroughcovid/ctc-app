import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { connectSearchBox } from "react-instantsearch-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  input: {
    height: 48,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

const SearchBox = ({ currentRefinement, refine }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={value => refine(value)}
      value={currentRefinement}
      placeholder='Search for location or business'
    />
  </View>
);

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectSearchBox(SearchBox);
