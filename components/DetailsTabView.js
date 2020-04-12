import React from "react";
import { Dimensions, Text, StyleSheet, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { capitalize } from "lodash";

import colours from "../utils/colours";

const UpdatesRoute = ({ business }) => (
  <View style={styles.scene}>
    <View style={styles.paddingContainer}>
      <Text style={styles.sectionTitle}>Current Services</Text>
      <View style={styles.serviceTilesContainer}>
        {business.offerings.map(offering => {
          return (
            <View style={styles.serviceTileBox} key={offering.name}>
              <Text style={styles.serviceTileText}>
                {capitalize(offering.name)}
              </Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.sectionParagraph}>{business.new_products}</Text>
      <View>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.sectionParagraph}>
          {business.product_details
            ? business.product_details
            : `${business.name.trim()} hasn't provided any information about their product offerings yet.`}
        </Text>
      </View>
    </View>
  </View>
);

const AboutRoute = ({ business }) => (
  <View style={styles.scene}>
    <View style={styles.paddingContainer}>
      <View>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionParagraph}>
          {business.business_details
            ? business.business_details
            : `${business.name.trim()} hasn't provided any information about their business yet.`}
        </Text>
      </View>
    </View>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

export default function DetailsTabView({ business }) {
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: "updates", title: "Updates" },
    { key: "about", title: "About us" },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "updates":
        return <UpdatesRoute business={business} />;
      case "about":
        return <AboutRoute business={business} />;
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
});
