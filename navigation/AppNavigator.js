import React from "react";
import { AsyncStorage } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";

const loggedIn = async () => {
  return false
  // AsyncStorage.removeItem("access-token");
  // const accessToken = await AsyncStorage.getItem("access-token");
  // const client = await AsyncStorage.getItem("client");
  // const uid = await AsyncStorage.getItem("uid");
  // const response = await fetch('https://carrythroughcovid.herokuapp.com/api/auth/validate_token', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'access-token': accessToken,
  //     'client': client,
  //     'uid': uid
  //   }
  // })
  // const result = await response.json()
  // console.log("is logged in:", result.success)
  // // return result.success
  // return false
  // // navigation.navigate(result.success ? "Main" : "Auth");
};

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {loggedIn().then(result => result) ? (
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="Auth" component={SignInScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={SignInScreen} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
)

// const RootNavigator = createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       Auth: SignInScreen,
//       Main: TabNavigator,
//     },
//     {
//       // TODO: Switch to AuthLoading when backend is ready
//       initialRouteName: "AuthLoading",
//     },
//   ),
// );

export default RootNavigator;
