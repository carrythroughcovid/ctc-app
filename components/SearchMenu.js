import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const SearchMenu = ({ options, currentRefinement, refine }) => {
  console.log("current refinement", currentRefinement);
  return (
    <View style={styles.pickerContainer}>
      <RNPickerSelect
        placeholder={{ label: "All", value: "" }}
        value={currentRefinement}
        onValueChange={val => refine(val)}
        items={options}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
});

export default SearchMenu;
