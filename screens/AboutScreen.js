import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import colours from "../utils/colours";

const AboutScreen = () => {
  // Dark background, light text
  const darkSectionStyle = addStyleTo("sectionContainer", {
    backgroundColor: colours.brand,
  });

  const darkSectionTitleStyle = addStyleTo("sectionTitle", {
    backgroundColor: colours.brand,
  });

  const darkSectionTextStyle = addStyleTo("sectionText", {
    color: colours.backgroundWhite,
  });

  const darkSectionTextBoldStyle = addStyleTo("sectionText", {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Oswald Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginVertical: 16,
    color: colours.textUiPrimary,
  });

  // Light background, dark text
  const lightSectionStyle = addStyleTo("sectionContainer", {
    backgroundColor: colours.backgroundWhite,
  });

  const lightSectionTitleStyle = addStyleTo("sectionTitle", {
    color: colours.textUiPrimary,
  });

  const lightSectionTextStyle = addStyleTo("sectionText", {
    color: colours.brand,
  });

  // Critical background (red)
  const criticalSectionStyle = addStyleTo("sectionContainer", {
    backgroundColor: colours.statusCritical,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={darkSectionStyle}>
        <Image
          style={styles.image}
          source={require("../assets/images/target.png")}
        />
        <Text style={darkSectionTitleStyle}>Our Mission</Text>
        <Text style={darkSectionTextStyle}>
          We want to help keep small businesses afloat and enable community
          support through technology.
        </Text>
        <Text style={darkSectionTextBoldStyle}>
          Completely free to use, forever.
        </Text>
      </View>
      <View style={lightSectionStyle}>
        <Image
          style={styles.image}
          source={require("../assets/images/hands-people.png")}
        />
        <Text style={lightSectionTitleStyle}>Who We Are</Text>
        <Text style={lightSectionTextStyle}>
          We’re a group of volunteers taking action to support small businesses.
          We realised that it can be tricky for customers to keep across all the
          latest updates from their favourite local businesses. So we thought
          we’d volunteer our skills and passion to help fill that gap.
        </Text>
      </View>
      <View style={criticalSectionStyle}>
        <Text style={lightSectionTitleStyle}>Terms and Conditions</Text>
        <Text style={darkSectionTextStyle}>
          Click{" "}
          <Text
            style={styles.sectionHyperlink}
            onPress={() =>
              Linking.openURL(
                "https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/ctc_terms.pdf",
              )
            }
          >
            here
          </Text>{" "}
          to view our terms and conditions.
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 42,
    paddingHorizontal: 30,
    display: "flex",
  },
  image: {
    width: 60,
    height: 60,
  },
  sectionTitle: {
    textAlign: "center",
    fontFamily: "Oswald Regular",
    fontSize: 16,
    textTransform: "uppercase",
    paddingTop: 12,
    paddingBottom: 8,
    letterSpacing: 1,
    color: colours.textUiPrimary,
  },
  sectionText: {
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Lato",
    fontSize: 16,
  },
  sectionHyperlink: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colours.backgroundWhite,
  },
});

const addStyleTo = (key, extraStyle) =>
  StyleSheet.flatten([styles[key], extraStyle]);

export default AboutScreen;
