import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import colours from "../utils/colours";

const AboutScreen = () => {
  const sectionDarkBlue = addStyleTo("sectionContainer", {
    backgroundColor: colours.textUiPrimary,
  });
  const sectionRed = addStyleTo("sectionContainer", {
    backgroundColor: colours.statusCritical,
  });
  const sectionPurple = addStyleTo("sectionContainer", {
    backgroundColor: colours.brand,
  });
  const sectionWhite = addStyleTo("sectionContainer", {
    backgroundColor: colours.backgroundWhite,
  });
  return (
    <ScrollView style={styles.container}>
      <View style={sectionDarkBlue}>
        <Text style={[styles.sectionTitle, styles.textWhite]}>
          Are you a small business?
        </Text>
        <Text style={[styles.sectionText, styles.textWhite]}>
          Sign up to our platform supporting small businesses through COVID-19.
        </Text>
        <TouchableOpacity
          style={styles.businessSignUpButton}
          onPress={() =>
            Linking.openURL("https://carrythroughcovid.com/signup")
          }
        >
          <Text style={styles.businessSignUpText}>Sign up now</Text>
        </TouchableOpacity>
      </View>
      <View style={sectionPurple}>
        <Image
          style={styles.image}
          source={require("../assets/images/target.png")}
        />
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={[styles.sectionText, styles.textWhite]}>
          We want to help keep small businesses afloat and enable community
          support through technology.
        </Text>
        <Text style={[styles.highlightText, styles.textUiPrimary]}>
          Completely free to use, forever.
        </Text>
      </View>
      <View style={sectionWhite}>
        <Image
          style={styles.image}
          source={require("../assets/images/hands-people.png")}
        />
        <Text style={[styles.sectionTitle, styles.textUiPrimary]}>
          Who We Are
        </Text>
        <Text style={[styles.sectionText, styles.textBrand]}>
          We’re a group of volunteers taking action to support small businesses.
          We realised that it can be tricky for customers to keep across all the
          latest updates from their favourite local businesses. So we thought
          we’d volunteer our skills and passion to help fill that gap.
        </Text>
      </View>
      <View style={sectionRed}>
        <Text style={[styles.sectionTitle, styles.textUiPrimary]}>
          Terms and Conditions
        </Text>
        <Text style={styles.textWhite}>
          View our terms and conditions{" "}
          <Text
            style={styles.sectionHyperlink}
            onPress={() =>
              Linking.openURL(
                "https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/ctc_terms.pdf",
              )
            }
          >
            here
          </Text>
          .
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
  businessSignUpButton: {
    backgroundColor: colours.brandAccent2,
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 5,
    marginTop: 16,
  },
  businessSignUpText: {
    textAlign: "center",
    fontFamily: "Oswald Regular",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: colours.backgroundWhite,
  },
  highlightText: {
    fontWeight: "bold",
    fontFamily: "Oswald Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginVertical: 16,
  },
  textBrand: {
    color: colours.brand, // Purple
  },
  textWhite: {
    color: colours.backgroundWhite,
  },
  textUiPrimary: {
    color: colours.textUiPrimary, // Dark blue
  },
});

const addStyleTo = (key, extraStyle) =>
  StyleSheet.flatten([styles[key], extraStyle]);

export default AboutScreen;
