import React from "react";
import { ScrollView, StyleSheet, Button, AsyncStorage } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../navigation/MainNavigator";

const SettingsScreen = ({ rootNavigation, navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  // const signOut = async () => {
  //   const accessToken = await AsyncStorage.getItem("access-token");
  //   const client = await AsyncStorage.getItem("client");
  //   const uid = await AsyncStorage.getItem("uid");

  //   const response = await fetch('https://carrythroughcovid.herokuapp.com/api/auth/sign_out', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'access-token': accessToken,
  //       'client': client,
  //       'uid': uid
  //     }
  //   })
  //   // const json = await response.json()
  //   if (response.status === 200) {
  //     // const { map } = response.headers
  //     await AsyncStorage.removeItem("access-token");
  //     await AsyncStorage.removeItem("client");
  //     await AsyncStorage.removeItem("uid");
  //   }
  //   // rootNavigation.navigate("AuthLoading")
  //   navigation.navigate("Auth")
  //   // navigation.navigate("AuthLoadingScreen")
  //   // navigation.dispatch(
  //   //   {
  //   //       type: 'Navigation/NAVIGATE',
  //   //       routeName: 'AuthLoading',
  //   //       action: {
  //   //         type: 'Navigation/NAVIGATE',
  //   //         routeName: 'AuthLoading',
  //   //       }
  //   //   }
  //   // );
  // }

  return (
    <ScrollView style={styles.container}>
      <Button title="Log out" onPress={signOut} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
  }
});

export default SettingsScreen;
