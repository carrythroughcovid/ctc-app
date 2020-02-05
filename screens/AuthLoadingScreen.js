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
      const userToken = await AsyncStorage.getItem("userToken");
      navigation.navigate(userToken ? "Main" : "Auth");
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
