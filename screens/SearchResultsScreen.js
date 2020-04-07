import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FeatherIcon from "react-native-vector-icons/Feather";
import ResultTile from "../components/ResultTile";

import colours from "../utils/colours";

const categoryData = [
  { label: "All categories", value: "" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Retail", value: "retail" },
  { label: "Health and Wellbeing", value: "health and wellbeing" },
  { label: "Services", value: "services" },
  { label: "Other", value: "other" },
];

const DEFAULT_CATEGORY = categoryData[0];

const BUSINESS_ENDPOINT =
  "https://carrythroughcovid.herokuapp.com/api/businesses";

const findCategory = (data, initialCategory) => {
  if (!initialCategory) {
    return DEFAULT_CATEGORY;
  }
  return data.find(category => category.label === initialCategory);
};

const filterByCategory = (businesses, categoryValue) =>
  businesses.filter(
    business => business.categories[0].name == categoryValue.toLowerCase(),
  );

export default function SearchResultsScreen({ navigation, route }) {
  const { searchInput, category: initialCategory } = route.params;
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [category, setCategory] = useState(
    findCategory(categoryData, initialCategory),
  );

  useEffect(() => {
    const fetchBusinesses = async () => {
      const results = await fetch(BUSINESS_ENDPOINT);
      const parsed = await results.json();
      setBusinesses(parsed);
      initialCategory
        ? setFilteredBusinesses(filterByCategory(parsed, initialCategory))
        : setFilteredBusinesses(parsed);
    };
    fetchBusinesses();
  }, [setBusinesses, initialCategory]);

  const handleCategoryChange = selectedCategory => {
    setCategory(selectedCategory);
    if (!selectedCategory) {
      setFilteredBusinesses(businesses);
      return;
    }
    const filtered = businesses.filter(
      business => business.categories[0].name == selectedCategory.toLowerCase(),
    );
    setFilteredBusinesses(filtered);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDown}>
            <RNPickerSelect
              placeholder={{}}
              placeholderTextColor={colours.textUiSecondary}
              value={category.value}
              items={categoryData}
              onValueChange={value => handleCategoryChange(value)}
              Icon={() => {
                return (
                  <FeatherIcon
                    name='chevron-down'
                    color={colours.textUiPrimary}
                    size={18}
                  />
                );
              }}
              style={pickerSelectStyles}
            />
          </View>
        </View>
        {businesses.length > 0 ? (
          <View>
            <Text style={styles.resultsText}>
              {filteredBusinesses.length}{" "}
              {filteredBusinesses.length === 1 ? "result" : "results"}
            </Text>
            {filteredBusinesses.length > 0 &&
              filteredBusinesses.map(business => (
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
        ) : (
          <Text style={styles.resultsText}>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
}

SearchResultsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: colours.backgroundWhite,
  },
  dropDown: {
    width: "100%",
    borderWidth: 1,
    borderColor: colours.backgroundGrey,
    borderRadius: 3,
    fontSize: 16,
  },
  dropDownContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colours.backgroundGrey,
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
  paddingContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  result: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  resultsText: {
    marginTop: 25,
    marginBottom: 10,
    color: colours.textUiSecondary,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    color: colours.textUiSecondary,
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  inputAndroid: {
    color: colours.textUiSecondary,
  },
  iconContainer: {
    right: 12,
    top: 15,
  },
};
