import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { capitalize } from "lodash";
import Input from "../components/Input";
import Constants from "expo-constants";
import colours from "../utils/colours";

const PurchaseScreen = ({ route }) => {
  const { business } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.titleContainer}>
          {!!business.imgix_images.logo && (
            <Image
              style={styles.logoImage}
              source={{ uri: business.imgix_images.logo }}
            />
          )}
          <View style={styles.titleDetailsContainer}>
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.subTitle}>
              {capitalize(business.categories[0].name)}
              {business.suburb ? ` · ${business.suburb}` : ``}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paddingContainer}>
        <Text>What product/service did you purchase?</Text>
        <Input />
        <Text>Add comments about your purchase</Text>
        <Input />
        <Text>Add an image of the purchase</Text>
        <Button
          style={styles.buttonUpload}
          title='Upload'
          onPress={() => console.log(business)}
        />
        <Text>This purchase is worth 10 Carry points.</Text>
        <Text>This purchase will unlock the Super Supporter badge.</Text>
        <Button
          style={styles.buttonSubmit}
          title='Submit'
          onPress={() => console.log(business)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
  },
  paddingContainer: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "stretch",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "stretch",
    paddingTop: 50,
    marginBottom: 30,
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
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  buttonUpload: {
    width: "50%",
  },
});

export default PurchaseScreen;
