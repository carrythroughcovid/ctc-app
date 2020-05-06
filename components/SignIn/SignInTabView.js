import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import Constants from "expo-constants";

import colours from "../../utils/colours";
import SignInRoute from "./SignInRoute";
import SignUpRoute from "./SignUpRoute";

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
  tabViewStyle: {
    backgroundColor: colours.backgroundWhite,
    marginTop: Constants.statusBarHeight,
  },
  indicator: {
    height: 3,
    backgroundColor: colours.brand,
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
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
});
