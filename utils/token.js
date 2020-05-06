import { AsyncStorage } from "react-native";

export const storeTokenInfo = (accessToken, client, uid) => {
  AsyncStorage.setItem("accessToken", accessToken);
  AsyncStorage.setItem("client", client);
  AsyncStorage.setItem("uid", uid);
};

export const getTokenInfo = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const client = await AsyncStorage.getItem("client");
  const uid = await AsyncStorage.getItem("uid");

  return { accessToken, client, uid };
};

export const clearTokenInfo = async () => {
  AsyncStorage.removeItem("accessToken");
  AsyncStorage.removeItem("client");
  AsyncStorage.removeItem("uid");
};
