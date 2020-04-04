import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import { capitalize } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";

import ResultTile from "../components/ResultTile";

export default function SearchResultsScreen({ navigation, route }) {
  const { searchInput } = route.params || null;
  const { category } = navigation.dangerouslyGetState().routes[1].params || "";
  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [dropdownCategory, setDropdownCategory] = useState(category || "");

  const categoryData = [
    { label: "All categories", value: "" },
    { label: "Hospitality", value: "hospitality" },
    { label: "Retail", value: "retail" },
    { label: "Health and Wellbeing", value: "health and wellbeing" },
    { label: "Services", value: "services" },
    { label: "Other", value: "other" },
  ];

  const nearestToMeData = [{ label: "Date added", value: "date-added" }];

  // Fetch data from API
  useEffect(() => {
    const fetchBusinesses = async () => {
      const results = await fetch(
        `https://carrythroughcovid.herokuapp.com/api/v1/business?input=${searchInput}`
      );
      const parsed = await results.json();
      setBusinesses(parsed);
      setFilteredBusinesses(parsed);
    };
    fetchBusinesses();
  }, [setBusinesses]);

  // Update category dropdown if selected from DiscoverScreen
  useEffect(() => {
    const updateCategoryDropDown = async () => {
      if (category) {
        handleCategoryChange(category);
      }
    };
    updateCategoryDropDown();
  }, [businesses, category]);

  const handleCategoryChange = selectedCategory => {
    // If there's a selected category, filter on its name
    // Else return all businesses
    setDropdownCategory({ label: selectedCategory, value: selectedCategory });
    if (selectedCategory) {
      const filtered = businesses.filter(business => {
        return business.categories[0].name == selectedCategory.toLowerCase();
      });
      setFilteredBusinesses(filtered);
    } else {
      setFilteredBusinesses(businesses);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Search by location or business name'
            leftIcon={() => {
              return <FontAwesomeIcon icon={faSearch} color={"#3F3356"} />;
            }}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.inputContainerStyle}
          >
            {searchInput ? searchInput : ""}
          </Input>
        </View>
        <View style={styles.dropDownContainer}>
          <View style={styles.dropDown}>
            <RNPickerSelect
              placeholder={{}}
              placeholderTextColor='#3F3356'
              items={categoryData}
              onValueChange={value => handleCategoryChange(value)}
              Icon={() => {
                return <FontAwesomeIcon icon={faSortDown} color={"#3F3356"} />;
              }}
              style={pickerSelectStyles}
            />
          </View>
          <View style={styles.dropDown}>
            <RNPickerSelect
              placeholder={{ label: "Nearest to me", value: "nearest-to-me" }}
              placeholderTextColor='#3F3356'
              items={nearestToMeData}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return <FontAwesomeIcon icon={faSortDown} color={"#3F3356"} />;
              }}
              style={pickerSelectStyles}
            />
          </View>
        </View>
        <Text style={styles.resultsText}>
          {filteredBusinesses.length}{" "}
          {filteredBusinesses.length === 1 ? "result" : "results"}{" "}
          {dropdownCategory.label
            ? `for ${capitalize(dropdownCategory.label)}`
            : ``}
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
    </ScrollView>
  );
};

SearchResultsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 0,
  },
  dropDown: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEBED",
    borderRadius: 3,
    width: "49%",
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
    color: "#787187",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    color: "#3F3356",
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 14,
  },
  inputAndroid: {
    color: "#3F3356",
  },
  iconContainer: {
    right: 12,
    top: 12,
  },
};

