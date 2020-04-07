import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Input, Divider } from "react-native-elements";
import CategoryTile from "../components/CategoryTile";
import { categories } from "../data/categories";
import FeatherIcon from "react-native-vector-icons/Feather";

import colours from "../utils/colours";

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Take a Browse</Text>
        <Text style={styles.textHeading}>Explore categories</Text>
        <View style={styles.categoryContainer}>
          {categories.map(({ name, icon }, i) => (
            <TouchableOpacity
              style={styles.categoryBox}
              key={i}
              onPress={() =>
                navigation.navigate("SearchResults", { category: name })
              }
            >
              <CategoryTile icon={icon} category={name} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.backgroundWhite,
    height: "100%",
  },
  leftIconContainerStyle: {
    marginRight: 8,
    marginLeft: 5,
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: 15,
  },
  scrollContainer: {
    backgroundColor: colours.backgroundWhite,
    paddingHorizontal: 20,
  },
  textHeading: {
    fontSize: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    marginTop: 25,
    paddingBottom: 5,
    textTransform: "uppercase",
    fontFamily: "Oswald Regular",
    fontWeight: "bold",
    fontSize: 18,
    color: colours.brandAccent3,
  },
  divider: {
    borderColor: colours.backgroundGrey,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 3,
  },
  categoryBox: {
    width: "47%",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
