import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoryTile = ({ iconUrl, category }) => {
  const image = { uri: iconUrl };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
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
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10
  },
  image: {
    width: 50,
    height: 50
  },
  text: {
    paddingTop: 10,
    textAlign: "center"
  }
});

export default CategoryTile;
