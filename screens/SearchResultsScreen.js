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

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import ResultTile from "../components/ResultTile";

export default function SearchResultsScreen({ navigation, route }) {
  const { searchInput } = route.params;
  const [businesses, setBusinesses] = useState([]);

  const categoryPlaceholder = {
    label: "All categories",
    value: null
  };

  const categoryData = [
    { label: "Hospitality", value: "category-hospitality" },
    { label: "Retail", value: "category-retail" },
    { label: "Health and Wellbeing", value: "category-health-wellbeing" }
  ];

  const nearestToMePlaceholder = {
    label: "Nearest to me",
    value: "nearest-to-me"
  };

  const nearestToMeData = [{ label: "Date added", value: "date-added" }];

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

  const dummyData = [
    { name: "Example Hospitality Option 1", category: "category-hospitality" },
    { name: "Example Hospitality Option 2", category: "category-hospitality" },
    { name: "Example Retail Option 1", category: "category-retail" },
    { name: "Example Retail Option 2", category: "category-retail" }
  ];

  const [categories, setCategories] = useState(dummyData);

  // Change the displayed categories to the one the user selected
  const handleCategoryChange = selectedCategory => {
    const categories = dummyData.filter(
      item => item.category == selectedCategory
    );
    setCategories(categories);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <Input placeholder="Search for a business" />
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDown}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={e => handleCategoryChange(e)}
              items={categoryData}
              placeholder={categoryPlaceholder}
              placeholderTextColor="#3F3356"
              Icon={() => {
                return <FontAwesomeIcon icon={faSortDown} color={"#3F3356"} />;
              }}
            />
          </View>
          <View style={styles.dropDown}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={value => console.log(value)}
              items={nearestToMeData}
              placeholder={nearestToMePlaceholder}
              placeholderTextColor="#3F3356"
              Icon={() => {
                return <FontAwesomeIcon icon={faSortDown} color={"#3F3356"} />;
              }}
            />
          </View>
        </View>
        <Text style={styles.resultsText}>
          {businesses.length} {businesses.length === 1 ? "result" : "results"}
        </Text>
        <View>
          {categories.map(item => {
            return (
              <View>
                <Text>
                  {item.name} - {item.category}
                </Text>
              </View>
            );
          })}
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

const pickerSelectStyles = {
  inputIOS: {
    color: "#3F3356",
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 14
  },
  inputAndroid: {
    color: "#3F3356"
  },
  iconContainer: {
    right: 12,
    top: 12
  }
};
