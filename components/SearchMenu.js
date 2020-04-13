import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FeatherIcon from "react-native-vector-icons/Feather";

import colours from "../utils/colours";

const SearchMenu = ({ options, currentRefinement, refine, filterName }) => {
  console.log("current refinement", currentRefinement);
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>{filterName}</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "All", value: "" }}
          value={currentRefinement}
          onValueChange={val => refine(val)}
          items={options}
          style={pickerSelectStyles}
          Icon={() => (
            <FeatherIcon
              name='chevron-down'
              color={colours.textUiPrimary}
              size={18}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flex: 0.32,
    display: "flex",
    justifyContent: "center",
  },
  filterText: {
    color: colours.textUiSecondary,
    paddingBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colours.backgroundGrey,
    borderRadius: 3,
    fontSize: 16,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    color: colours.textUiSecondary,
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  inputAndroid: {
    color: colours.textUiSecondary,
  },
  iconContainer: {
    right: 12,
    top: 15,
  },
};

export default SearchMenu;
