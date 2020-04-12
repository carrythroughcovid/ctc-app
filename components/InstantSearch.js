import React from "react";
import { View } from "react-native";
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
    <CustomMenu attribute='location.state' resourceName='states' />
    <InfiniteHits navigation={navigation} />
  </AlgoliaInstantSearch>
);

export default InstantSearch;
