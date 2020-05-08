import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../components/Input";
import { TouchableOpacity } from "react-native-gesture-handler";

const PurchaseScreen = ({ navigate }) => {
  return (
    <ScrollView>
      <View>
        <Text>Company name</Text>
      </View>
      <View>
        <Text>What product/service did you purchase?</Text>
        <Input />
      </View>
      <View>
        <Text>Add comments about your purchase</Text>
      </View>
      <View>
        <Text>Add an image of the purchase</Text>
        <TouchableOpacity onPress={() => console.log("Upload image")}>
          <Text>Upload</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>This purchase is worth 10 Carry points.</Text>
        <Text>This purchase will unlock the Super Supporter badge.</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("Submit image")}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
  },
});

export default PurchaseScreen;
