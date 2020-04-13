import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { startCase } from "lodash";
import RNPickerSelect from "react-native-picker-select";

const SearchMenu = ({ options, currentRefinement, refine }) => {
  console.log("current refinement", currentRefinement);
  return (
    <RNPickerSelect
      value={currentRefinement}
      onValueChange={val => refine(val)}
      // style={styles.picker}
      items={options}
    />
  );
};

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },
});

export default SearchMenu;
