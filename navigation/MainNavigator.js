import * as React from "react";
import { AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "./TabNavigator";
import { storeTokenInfo } from "../utils/token";
import { signInAsync, signUpAsync, signOutAsync } from "../utils/signIn";

export const AuthContext = React.createContext();

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            isLoading: false,
            accessToken: action.accessToken,
            client: action.client,
            uid: action.uid,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            accessToken: action.accessToken,
            client: action.client,
            uid: action.uid,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            accessToken: null,
            client: null,
            uid: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      accessToken: null,
      client: null,
      uid: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let accessToken;
      let client;
      let uid;

      try {
        accessToken = await AsyncStorage.getItem("accessToken");
        client = await AsyncStorage.getItem("client");
        uid = await AsyncStorage.getItem("uid");
      } catch (error) {
        console.warn(error);
      }
      dispatch({ type: "RESTORE_TOKEN", accessToken, client, uid });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        const { email, password, setErrors } = data;
        const response = await signInAsync(email, password);

        if (response.success) {
          const { accessToken, client, uid } = response.tokenInfo;
          storeTokenInfo(accessToken, client, uid);
          dispatch({ type: "SIGN_IN", accessToken, client, uid });
        } else {
          response.errors.forEach(error => console.warn(error));
          setErrors(response.errors);
        }
      },
      signOut: async () => {
        await signOutAsync();
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async data => {
        const { email, password, name, setErrors } = data;
        const response = await signUpAsync(email, password, name);

        if (response.success) {
          const { accessToken, client, uid } = response.tokenInfo;
          storeTokenInfo(accessToken, client, uid);
          dispatch({ type: "SIGN_IN", accessToken, client, uid });
        } else {
          response.errors.forEach(error => console.warn(error));
          setErrors(response.errors);
        }
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.accessToken == null ? (
            <Stack.Screen
              name='SignIn'
              component={SignInScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
