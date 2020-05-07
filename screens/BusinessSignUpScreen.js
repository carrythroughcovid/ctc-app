import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import WebView from "react-native-webview";

const BusinessSignUpScreen = () => {
  return (
    <WebView
      source={{ uri: "https://carrythroughcovid.com/signup" }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default BusinessSignUpScreen;
