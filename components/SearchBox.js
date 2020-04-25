import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { connectSearchBox } from "react-instantsearch-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colours from "../utils/colours";

const SearchBox = ({ currentRefinement, refine }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={value => refine(value)}
        value={currentRefinement}
        placeholder='Search for location or business'
      />
      <TouchableOpacity onPress={() => refine(null)}>
        <Icon
          style={styles.inputIcon}
          name='times'
          size={18}
          color={colours.textUiTertiary}
        />
      </TouchableOpacity>
    </View>
  </View>
);

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colours.textUiTertiary,
  },
  input: {
    flex: 1,
    height: 48,
    padding: 12,
    fontSize: 16,
  },
  inputIcon: {
    marginVertical: 14,
    marginHorizontal: 14,
  },
});

export default connectSearchBox(SearchBox);
