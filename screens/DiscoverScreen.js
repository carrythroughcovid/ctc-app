import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { Input, Divider } from 'react-native-elements';

import CategoryTile from '../components/CategoryTile'
import { categories } from "../data/categories"

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Input
          placeholder="Search by location or business name"
          onSubmitEditing={event => navigation.navigate("SearchResults", {
            searchInput: event.nativeEvent.text
          })}
        />
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>TAKE A BROWSE</Text>
        <Text style={styles.textHeading}>Explore Categories</Text>
        <View style={styles.categoryContainer}>
          {categories.map(({ name, iconUrl }, i) => (
            <View key={i} style={styles.categoryTile}>
              <CategoryTile iconUrl={iconUrl} category={name} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

DiscoverScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  textHeading: {
    fontSize: 25,
  },
  sectionTitle: {
    color: '#9060EB',
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 3,
  },
  categoryTile: {
    paddingTop: 20,
    width: '48%',
  }
});
