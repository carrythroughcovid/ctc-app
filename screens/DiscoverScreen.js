import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Input, Divider } from "react-native-elements";

import CategoryTile from "../components/CategoryTile";
import { categories } from "../data/categories";

import FeatherIcon from "react-native-vector-icons/Feather";

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Search by location or business name'
            onSubmitEditing={event =>
              navigation.navigate("SearchResults", {
                searchInput: event.nativeEvent.text,
              })
            }
            leftIcon={() => {
              return <FeatherIcon name='search' color={"#3F3356"} size={20} />;
            }}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          />
        </View>
      </ScrollView>
      <Divider style={styles.divider} />
      <ScrollView style={styles.scrollContainer}>
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

DiscoverScreen.navigationOptions = () => {
  return {
    tabBarOptions: { showLabel: false },
    tabBarOptions: {
      activeTintColor: "#1A051D",
      inactiveTintColor: "#CCCCCC",
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ECEBED",
  },
  inputContainerStyle: {
    paddingVertical: 2,
    borderWidth: 0,
    borderColor: "transparent",
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
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  textHeading: {
    fontSize: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#9060EB",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
  },
  divider: {
    backgroundColor: "#CCCCCC",
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 3,
  },
  categoryIcon: {
    minWidth: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
