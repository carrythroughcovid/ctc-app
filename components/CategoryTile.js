import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://i2.wp.com/oldpodcast.com/wp-content/uploads/2019/08/healthy_food.jpg" }

const CategoryTile = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} />
    <Text style={styles.text}>Health and Fitness</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    resizeMode: "cover",
    minHeight: 100,
  },
  text: {
    padding: 20,
  }
})

export default CategoryTile;