import React from "react";
import { Dimensions, Text, StyleSheet, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import colours from "../utils/colours";

const UpdatesRoute = () => (
  <View style={styles.scene}>
    <View style={styles.paddingContainer}>
      <Text style={styles.sectionTitle}>Updates</Text>
      <Text style={styles.sectionParagraph}>Something about updates.</Text>
    </View>
  </View>
);

const AboutRoute = () => (
  <View style={styles.scene}>
    <View style={styles.paddingContainer}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionParagraph}>Something about the company.</Text>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

export default function DetailsTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "updates", title: "Updates" },
    { key: "about", title: "About us" },
  ]);

  const renderScene = SceneMap({
    updates: UpdatesRoute,
    about: AboutRoute,
  });

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
    backgroundColor: "green",
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
  sectionTitle: {
    color: colours.brandAccent3,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
    fontFamily: "Oswald Regular",
    fontSize: 16,
  },
  sectionParagraph: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: colours.textUiPrimary,
  },
});
