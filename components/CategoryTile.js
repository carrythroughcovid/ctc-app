import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const CategoryTile = ({ iconUrl, category }) => {
  const image = { uri: iconUrl }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: 'white',
    height: 200,
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    paddingTop: 20,
  }
})

export default CategoryTile;