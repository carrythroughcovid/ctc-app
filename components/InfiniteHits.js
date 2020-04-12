import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { connectInfiniteHits } from "react-instantsearch-native";
import ResultTile from "./ResultTile";

const InfiniteHits = ({ navigation, hits, hasMore, refine }) => (
  <FlatList
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View />}
    onEndReached={() => hasMore && refine()}
    renderItem={({ item: business }) => (
      <TouchableOpacity
        style={styles.result}
        key={business.objectID}
        onPress={() => navigation.navigate("Details", { business })}
      >
        <ResultTile business={business} />
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  result: {
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default connectInfiniteHits(InfiniteHits);
