import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import colours from "../utils/colours";

// const categoryImage = {
//   uri:
//     "https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/icons/cheeseburger.png",
// };

const ResultTile = ({ business }) => {
  const {
    location: { suburb },
    imgix_images: { header_image },
    headline,
  } = business;
  const headerImage = { uri: header_image };

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <ImageBackground source={headerImage} style={styles.image} />
        {!!suburb && (
          <View style={styles.suburb}>
            <Text style={styles.suburbText}>{suburb}</Text>
          </View>
        )}
        <View style={styles.bottomWrapper}>
          {/* <View style={styles.category}>
            <Image style={styles.categoryImage} source={categoryImage} />
          </View> */}
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.subTitle}>{headline}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 5,
    elevation: 5,
    position: "relative",
  },
  bottomWrapper: {
    backgroundColor: colours.backgroundWhite,
    paddingBottom: 30,
    display: "flex",
    alignItems: "center",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 16,
  },
  image: {
    resizeMode: "cover",
    minHeight: 150,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  text: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colours.textUiPrimary,
  },
  subTitle: {
    textAlign: "center",
    paddingTop: 10,
    color: colours.textUiSecondary,
  },
  categoryImage: {
    width: 40,
    height: 40,
    transform: [{ translateY: -2 }],
  },
  category: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    backgroundColor: colours.backgroundGrey,
    marginTop: -40,
    borderRadius: 50,
    borderColor: colours.backgroundWhite,
    borderWidth: 5,
  },
  suburb: {
    position: "absolute",
    top: 15,
    left: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colours.brandAccent3,
    borderRadius: 5,
  },
  suburbText: {
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: 11,
    color: colours.backgroundWhite,
  },
});

export default ResultTile;
