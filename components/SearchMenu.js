import React from "react";
import { View, Picker } from "react-native";

const SearchMenu = ({ items, currentRefinement, refine, resourceName }) => (
  <View>
    <View>
      <Picker
        selectedValue={(currentRefinement && currentRefinement.value) || ""}
        onValueChange={(itemValue, _) => refine(itemValue)}
      >
        {items.map(item => (
          <Picker.Item label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  </View>
);

export default SearchMenu;
