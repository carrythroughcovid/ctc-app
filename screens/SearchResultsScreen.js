import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

import ResultTile from "../components/ResultTile";

export default function SearchResultsScreen({ navigation, route }) {
  const { searchInput } = route.params;
  const [businesses, setBusinesses] = useState([]);

  const servicesPlaceholder = {
    label: "All services",
    value: null,
    color: "#3F3356"
  };

  const categoryPlaceholder = {
    label: "All categories",
    value: null,
    color: "#3F3356"
  };

  const servicesData = [
    { label: "Service 1", value: "service-1" },
    { label: "Service 2", value: "service-2" }
  ];

  const categoryData = [
    { label: "Category 1", value: "category-1" },
    { label: "Category 2", value: "category-2" }
  ];

  useEffect(() => {
    const fetchBusinesses = async () => {
      const results = await fetch(
        `https://carrythroughcovid.herokuapp.com/api/v1/business?input=${searchInput}`
      );
      const parsed = await results.json();
      setBusinesses(parsed);
    };
    fetchBusinesses();
  }, [setBusinesses]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <Input placeholder="Search for a business" />
        <Text style={styles.resultsText}>{businesses.length} results</Text>
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDown}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={servicesData}
              placeholder={servicesPlaceholder}
            />
          </View>
          <View style={styles.dropDown}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={categoryData}
              placeholder={categoryPlaceholder}
            />
          </View>
        </View>
        {businesses.length > 0 &&
          businesses.map(business => (
            <TouchableOpacity
              style={styles.result}
              key={business.id}
              onPress={() => navigation.navigate("Details", { business })}
            >
              <ResultTile
                name={business.name}
                category={business.categories[0].name}
                suburb={business.suburb}
              />
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

SearchResultsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0
  },
  dropDown: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEBED",
    borderRadius: 3,
    padding: 15,
    width: "49%"
  },
  dropDownContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  paddingContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  result: {
    paddingBottom: 10,
    paddingTop: 10
  },
  resultsText: {
    paddingTop: 10
  }
});
