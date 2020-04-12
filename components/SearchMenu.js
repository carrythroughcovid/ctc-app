import React from "react";
import { View, Picker, StyleSheet } from "react-native";
import { startCase } from "lodash";

const SearchMenu = ({ items, currentRefinement, refine, resourceName }) => (
  <Picker
    selectedValue={(currentRefinement && currentRefinement.value) || ""}
    onValueChange={(itemValue, _) => refine(itemValue)}
    style={styles.picker}
  >
    <Picker.Item label={"All"} />
    {items.map(item => (
      <Picker.Item label={startCase(item.label)} value={item.value} />
    ))}
  </Picker>
);

const styles = StyleSheet.create({
  picker: {
    flex: 1,
  },
});

export default SearchMenu;
