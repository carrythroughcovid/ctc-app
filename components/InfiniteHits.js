import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connectInfiniteHits } from "react-instantsearch-native";
import Highlight from "./Highlight";
import ResultTile from "./ResultTile";

const InfiniteHits = ({ hits, hasMore, refine }) => (
  <FlatList
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View />}
    onEndReached={() => hasMore && refine()}
    renderItem={({ item: business }) => <ResultTile business={business} />}
  />
);

export default connectInfiniteHits(InfiniteHits);
