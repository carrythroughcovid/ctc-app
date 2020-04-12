import React from "react";
import { Dimensions, Text, StyleSheet, View, Image } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { capitalize } from "lodash";

import colours from "../utils/colours";

const UpdatesRoute = ({ business }) => (
  <View style={styles.scene}>
    <View style={styles.paddingContainer}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{business.headline}</Text>
      </View>
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
      <View style={styles.contactContainer}>
        <Image
          style={styles.contactIcon}
          source={require("../assets/images/phone.png")}
        />
        <Text style={styles.contactText}>
          {business.busines_number || "0400123456"}
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <Image
          style={styles.contactIcon}
          source={require("../assets/images/mail.png")}
        />
        <Text style={styles.contactText}>
          {business.busines_email || "jane@business.com.au"}
        </Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Our Story</Text>
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
  headline: {
    fontFamily: "Lato",
    fontSize: 24,
  },
  headlineContainer: {
    paddingVertical: 16,
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
