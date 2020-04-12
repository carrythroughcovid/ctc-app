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
import DetailsTabView from "../components/DetailsTabView";

export default function DetailsScreen({ route }) {
  const { business } = route.params;
  const headerImage = { uri: business.imgix_images.header_image };
  const logo = { uri: business.imgix_images.logo };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.headerImage} source={headerImage} />
      <View style={styles.paddingContainer}>
        <View style={styles.titleContainer}>
          <Image style={styles.logoImage} source={logo} />
          <View style={styles.titleDetailsContainer}>
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.subTitle}>
              {capitalize(business.categories[0].name)}
              {business.suburb ? ` · ${business.suburb}` : ``}
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
      </View>
      <DetailsTabView business={business} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingTop: 0,
    backgroundColor: "#fff",
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
    width: 60,
    height: 60,
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
