import React, { useContext } from "react";
import { ScrollView, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

import { AuthContext } from "../navigation/MainNavigator";

const SettingsScreen = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <Button title='Log out' onPress={signOut} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
  },
});

export default SettingsScreen;
