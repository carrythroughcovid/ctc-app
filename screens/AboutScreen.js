import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import colours from "../utils/colours";

const AboutScreen = () => {
  const darkSectionStyle = addStyleTo("sectionContainer", {
    backgroundColor: colours.brand,
  });

  const lightSectionStyle = addStyleTo("sectionContainer", {
    backgroundColor: colours.backgroundGrey,
  });

  const lightSectionTextStyle = addStyleTo("sectionText", {
    color: "white",
  });

  const darkSectionTextStyle = addStyleTo("sectionText", {
    color: colours.brandAccent3,
  });

  const lightSectionTextBoldStyle = addStyleTo("sectionText", {
    color: "white",
    fontWeight: "bold",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={darkSectionStyle}>
        <Image
          style={styles.image}
          source={require("../assets/images/target.png")}
        />
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={lightSectionTextStyle}>
          We want to help keep small businesses afloat and enable community
          support through technology.
        </Text>
        <Text style={lightSectionTextBoldStyle}>
          Completely free to use, forever.
        </Text>
      </View>
      <View style={lightSectionStyle}>
        <Image
          style={styles.image}
          source={require("../assets/images/hands-people.png")}
        />
        <Text style={styles.sectionTitle}>Who We Are</Text>
        <Text style={darkSectionTextStyle}>
          We’re a group of volunteers taking action to support small businesses.
          We realised that it can be tricky for customers to keep across all the
          latest updates from their favourite local businesses. So we thought
          we’d volunteer our skills and passion to help fill that gap.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
  },
  sectionContainer: {
    paddingVertical: 100,
    paddingHorizontal: 30,
    display: "flex",
  },
  image: {
    width: 60,
    height: 60,
  },
  sectionTitle: {
    fontFamily: "Oswald Regular",
    fontSize: 16,
    textTransform: "uppercase",
    paddingVertical: 16,
  },
  sectionText: {
    fontFamily: "Lato",
    paddingTop: 8,
  },
});

const addStyleTo = (key, extraStyle) =>
  StyleSheet.flatten([styles[key], extraStyle]);

export default AboutScreen;
