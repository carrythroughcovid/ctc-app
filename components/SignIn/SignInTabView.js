import React from "react";
import {
  Dimensions,
  StyleSheet,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import colours from "../../utils/colours";
import SignInRoute from "./SignInRoute"
import SignUpRoute from "./SignUpRoute"

const initialLayout = { width: Dimensions.get("window").width };

export default function DetailsTabView() {
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: "signin", title: "Sign In" },
    { key: "create", title: "Create Account" },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "signin":
        return <SignInRoute />;
      case "create":
        return <SignUpRoute />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabViewStyle}
      renderTabBar={props => (
        <TabBar
          {...props}
          getLabelText={({ route: { title } }) => title}
          indicatorStyle={styles.indicator}
          tabStyle={styles.tabBarStyle}
          style={styles.tabBar}
          labelStyle={styles.tabBarLabel}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: colours.backgroundWhite,
  },
  paddingContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  tabViewStyle: {
    backgroundColor: colours.backgroundWhite,
  },
  indicator: {
    height: 3,
    backgroundColor: colours.brand,
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headline: {
    fontFamily: "Lato",
    fontSize: 24,
  },
  headlineContainer: {
    paddingBottom: 16,
    paddingTop: 32,
  },
  tabBarStyle: {
    color: colours.textUiPrimary,
  },
  tabBar: {
    backgroundColor: colours.backgroundWhite,
  },
  tabBarLabel: {
    color: colours.textUiPrimary,
  },
  sectionTitle: {
    color: colours.brand,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
    fontFamily: "Oswald Light",
    fontSize: 16,
  },
  sectionParagraph: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: colours.textUiPrimary,
  },
  serviceTilesContainer: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 15,
  },
  serviceTileBox: {
    marginRight: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: colours.brandAccent1,
    borderRadius: 20,
  },
  serviceTileText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  contactIcon: {
    width: 24,
    height: 24,
  },
  contactText: {
    fontFamily: "Lato",
    fontSize: 16,
    paddingLeft: 16,
    color: colours.textUiSecondary,
  },
});
