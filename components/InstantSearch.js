import React from "react";
import { View } from "react-native";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch as AlgoliaInstantSearch } from "react-instantsearch-native";
import SearchBox from "./SearchBox";
import InfiniteHits from "./InfiniteHits";

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

const InstantSearch = () => (
  <AlgoliaInstantSearch
    indexName='prod_business'
    searchClient={searchClient}
    root={root}
  >
    <SearchBox />
    <InfiniteHits />
  </AlgoliaInstantSearch>
);

export default InstantSearch;
