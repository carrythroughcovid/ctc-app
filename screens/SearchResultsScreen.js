import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';

import ResultTile from "../components/ResultTile"

export default function SearchResultsScreen({ navigation }) {
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    const fetchBusinesses = async () => {
      const results = await fetch('https://carrythroughcovid.herokuapp.com/api/v1/business')
      const parsed = await results.json()
      setBusinesses(parsed)
    }
    fetchBusinesses()
  }, [setBusinesses])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingContainer}>
        <Input placeholder="Search for a business" />
        <Text style={styles.resultsText}>{businesses.length} results</Text>
        {businesses.length > 0 &&
          businesses.map(({ name, categories, suburb, id }) => (
            <TouchableOpacity
              style={styles.result}
              key={id}
              onPress={() => navigation.navigate("Details")}
            >
              <ResultTile
                name={name}
                category={categories[0].name}
                suburb={suburb}
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
    backgroundColor: '#fff',
    paddingTop: 0,
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
    paddingTop: 10,
  }
});
