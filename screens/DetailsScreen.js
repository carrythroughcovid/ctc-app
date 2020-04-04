import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { capitalize } from "lodash";

import colours from "../utils/colours";

export default function DetailsScreen({ route }) {
  const { business } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.headerImage}
        source={{
          uri:
            "https://www.adpstore.com.au/wp-content/uploads/2017/08/shop-layout-1440x961.jpg",
        }}
      />
      <View style={styles.paddingContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.logoImageContainer}>
            <Image
              style={styles.logoImage}
              source={{
                uri:
                  "https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/icons/cheeseburger.png",
              }}
            />
          </View>
          <View style={styles.titleDetailsContainer}>
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.subTitle}>
              {capitalize(business.categories[0].name)} &middot;{" "}
              {business.address.suburb}
            </Text>
          </View>
        </View>
        <View styles={styles.actionButtonContainer}>
          <Button
            title='Visit our website'
            buttonStyle={styles.actionButton}
            titleStyle={styles.actionButtonTitleStyle}
          />
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
        <View>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text style={styles.sectionParagraph}>
            {business.product_details
              ? business.product_details
              : `${business.name.trim()} hasn't provided any information about their product offerings yet.`}
          </Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.sectionParagraph}>
            {business.business_details
              ? business.business_details
              : `${business.name.trim()} hasn't provided any information about their business yet.`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

DetailsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
    width: Dimensions.get("window").width,
  },
  paddingContainer: {
    paddingHorizontal: 20,
  },
  textHeading: {
    fontSize: 30,
  },
  headerImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  logoImageContainer: {
    backgroundColor: colours.backgroundGrey,
    borderRadius: 50,
    padding: 18,
    width: 60,
    height: 60,
  },
  logoImage: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    alignItems: "stretch",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "stretch",
    paddingTop: 50,
    marginBottom: 30,
  },
  titleDetailsContainer: {
    height: "100%",
    width: "80%",
    marginLeft: 10,
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 3,
    color: colours.textUiPrimary,
  },
  subTitle: {
    fontSize: 15,
    color: colours.textUiSecondary,
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
  actionButton: {
    paddingTop: 12,
    paddingBottom: 14,
    backgroundColor: colours.brand,
    borderRadius: 8,
    marginBottom: 20,
  },
  actionButtonTitleStyle: {
    fontSize: 16,
    fontWeight: "bold",
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
