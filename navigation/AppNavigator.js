import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// import SignInScreen from '../screens/SignInScreen';

import TabNavigator from './TabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      // TODO: Implement auth when backend is ready
      // AuthLoading: AuthLoadingScreen,
      // Auth: SignInScreen,
      Main: TabNavigator,
    },
    {
      // TODO: Switch to AuthLoading when backend is ready
      initialRouteName: 'Main',
    }
    )
);
