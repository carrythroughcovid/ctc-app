import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { capitalize } from "lodash";
import Input from "../components/Input";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Constants from "expo-constants";
import colours from "../utils/colours";

const PurchaseScreen = ({ route }) => {
  const { business } = route.params;

  const [productDescription, onChangeProductDescription] = useState("");
  const [comment, onChangeComment] = useState("");
  const [purchaseImage, onChangePurchaseImage] = useState(null);

  useEffect(() => {
    const _getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };
    _getPermissionAsync();
  }, []);

  const uploadImage = async () => {
    try {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!image.cancelled) {
        onChangePurchaseImage({ image: image.uri });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitPurchase = () => {
    // TODO (Jac):
    //  - Gather product description, comment, and image
    //  - Submit to server
    //  - Transition to social/thank you page
    console.log("submitPurchase");
  };

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
        <Text style={styles.sectionTitle}>
          What product/service did you purchase?
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Almond latte'
            onChangeText={text => onChangeProductDescription(text)}
            value={productDescription}
          />
        </View>
        <Text style={styles.sectionTitle}>
          Add comments about your purchase
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Best value for money'
            onChangeText={text => onChangeComment(text)}
            value={comment}
          />
        </View>
        <Text style={styles.sectionTitle}>Add an image of the purchase</Text>
        <Button
          buttonStyle={[styles.actionButton, { width: "50%" }]}
          title='Upload'
          onPress={uploadImage}
        />
        <View>
          {purchaseImage && (
            <Image source={{ uri: purchaseImage.image }} style={styles.image} />
          )}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionParagraph}>
            This purchase is worth 10 Carry points.
          </Text>
          <Text style={styles.sectionParagraph}>
            This purchase will unlock the Super Supporter badge.
          </Text>
        </View>
        <Button
          buttonStyle={styles.actionButton}
          title='Submit'
          onPress={submitPurchase}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colours.backgroundWhite,
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
    marginRight: 15,
  },
  actionButton: {
    backgroundColor: colours.brand,
    borderRadius: 3,
  },
  inputContainer: {
    backgroundColor: colours.backgroundWhite,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colours.textUiTertiary,
  },
  sectionTitle: {
    color: colours.brand,
    fontWeight: "normal",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
    fontFamily: "Oswald Regular",
    fontSize: 16,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  sectionParagraph: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.textUiPrimary,
  },
  image: {
    marginVertical: 10,
    width: 200,
    height: 200,
  },
});

export default PurchaseScreen;
