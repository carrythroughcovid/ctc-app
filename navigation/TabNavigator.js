import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiscoverScreen from '../screens/DiscoverScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AboutScreen from '../screens/AboutScreen';

const DiscoverStack = createStackNavigator();

function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
      <DiscoverStack.Screen name="SearchResults" component={SearchResultsScreen} />
      <DiscoverStack.Screen name="Details" component={DetailsScreen} />
    </DiscoverStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="Settings" component={AboutScreen} />
    </AboutStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Discover" component={DiscoverStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}