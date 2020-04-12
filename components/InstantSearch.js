import React from "react";
import { View, StyleSheet } from "react-native";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch as AlgoliaInstantSearch,
  connectMenu,
} from "react-instantsearch-native";
import SearchBox from "./SearchBox";
import InfiniteHits from "./InfiniteHits";
import SearchMenu from "../components/SearchMenu";

const searchClient = algoliasearch(
  "TGPZX7CMYY",
  "859c34030d228a6188c83731bb6e456f",
);

const root = {
  Root: View,
  props: {
    style: {
      flex: 1,
    },
  },
};

const CustomMenu = connectMenu(SearchMenu);

const InstantSearch = ({ navigation }) => (
  <AlgoliaInstantSearch
    indexName='prod_business'
    searchClient={searchClient}
    root={root}
  >
    <SearchBox />
    <View style={styles.horizontal}>
      <CustomMenu attribute='location.state' resourceName='states' />
      <CustomMenu attribute='offerings.name' resourceName='offerings' />
      <CustomMenu attribute='categories.name' resourceName='categories' />
    </View>
    <InfiniteHits navigation={navigation} />
  </AlgoliaInstantSearch>
);

const styles = StyleSheet.create({
  horizontal: {
    display: "flex",
    flexDirection: "row",
  },
});

export default InstantSearch;
