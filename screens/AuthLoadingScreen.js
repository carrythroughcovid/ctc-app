import React, { useEffect } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from "react-native";

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const _bootstrapAsync = async () => {
      // AsyncStorage.removeItem("access-token");
      const accessToken = await AsyncStorage.getItem("access-token");
      const client = await AsyncStorage.getItem("client");
      const uid = await AsyncStorage.getItem("uid");
      const response = await fetch('https://carrythroughcovid.herokuapp.com/api/auth/validate_token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'access-token': accessToken,
          'client': client,
          'uid': uid
        }
      })
      const result = await response.json()
      navigation.navigate(result.success ? "Main" : "Auth");
    };

    _bootstrapAsync();
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
