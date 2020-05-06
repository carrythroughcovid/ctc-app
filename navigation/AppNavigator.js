import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';

import TabNavigator from "./TabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: SignInScreen,
      Main: TabNavigator,
    },
    {
      // TODO: Switch to AuthLoading when backend is ready
      initialRouteName: "AuthLoading",
    },
  ),
);
