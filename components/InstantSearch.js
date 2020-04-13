import React from "react";
import { StyleSheet, View } from "react-native";
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

const CustomMenu = connectMenu(SearchMenu);

const states = [
  { value: "VIC", label: "VIC" },
  { value: "SA", label: "SA" },
  { value: "NSW", label: "NSW" },
  { value: "TAS", label: "TAS" },
];

const offerings = [
  { value: "credit", label: "Credit" },
  { value: "discounts", label: "Discounts" },
  { value: "online", label: "Online" },
  { value: "delivery", label: "Delivery" },
  { value: "virtual", label: "Virtual" },
  { value: "takeaway", label: "Takeaway" },
  { value: "other", label: "Other" },
];

const categories = [
  { value: "hospitality", label: "Hospitality" },
  { value: "retail", label: "Retail" },
  { value: "services", label: "Services" },
  { value: "other", label: "Other" },
];

const InstantSearch = ({ navigation }) => {
  return (
    <AlgoliaInstantSearch
      indexName='prod_business'
      searchClient={searchClient}
      onSearchStateChange={searchState =>
        console.log("searchstate", searchState)
      }
    >
      <SearchBox />
      <View style={styles.horizontal}>
        <CustomMenu attribute='location.state' options={states} />
        <CustomMenu attribute='offerings.name' options={offerings} />
        <CustomMenu attribute='categories.name' options={categories} />
      </View>
      <InfiniteHits navigation={navigation} />
    </AlgoliaInstantSearch>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
});

export default InstantSearch;
