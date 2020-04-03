import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { Input, Divider } from "react-native-elements";

import CategoryTile from "../components/CategoryTile";
import { categories } from "../data/categories";

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Input
          placeholder="Search by location or business name"
          onSubmitEditing={event =>
            navigation.navigate("SearchResults", {
              searchInput: event.nativeEvent.text
            })
          }
        />
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Take a Browse</Text>
        <Text style={styles.textHeading}>Explore Categories</Text>
        <View style={styles.categoryContainer}>
          {categories.map(({ name, iconUrl }, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("SearchResults", { category: name })
              }
            >
              <View key={i} style={styles.categoryIcon}>
                <CategoryTile iconUrl={iconUrl} category={name} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

DiscoverScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollContainer: {
    padding: 20
  },
  textHeading: {
    fontSize: 25,
    marginBottom: 15
  },
  sectionTitle: {
    color: "#9060EB",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase"
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 3
  },
  categoryIcon: {
    minWidth: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  }
});
