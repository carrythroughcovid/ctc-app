import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import colours from "../utils/colours";

const CategoryTile = ({ icon, category }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={icon} size={45} />
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 200,
    elevation: 5,
    backgroundColor: colours.backgroundWhite,
    padding: 20,
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    flexWrap: "wrap",
    paddingTop: 10,
    textAlign: "center",
    fontFamily: "Oswald Regular",
    textTransform: "uppercase",
    fontSize: 18,
    color: colours.textUiPrimary,
  },
});

export default CategoryTile;
