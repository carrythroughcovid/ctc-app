import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DiscoverScreen from "../screens/DiscoverScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import AboutScreen from "../screens/AboutScreen";
import BusinessSignUpScreen from "../screens/BusinessSignUpScreen";

import FeatherIcon from "react-native-vector-icons/Feather";

const DiscoverStack = createStackNavigator();

function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      {/* <DiscoverStack.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{ headerTitle: "" }}
      /> */}
      <DiscoverStack.Screen
        name='SearchResults'
        component={SearchResultsScreen}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
      />
      <DiscoverStack.Screen
        name='Details'
        component={DetailsScreen}
        options={{
          headerTitle: "",
        }}
      />
    </DiscoverStack.Navigator>
  );
}

const AboutStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name='About'
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
      <AboutStack.Screen
        name='BusinessSignUp'
        component={BusinessSignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </AboutStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Discover'
          component={DiscoverStackScreen}
          options={{
            tabBarLabel: "Discover",
            tabBarIcon: () => (
              <FeatherIcon name='search' color={"#1A051D"} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name='About'
          component={AboutStackScreen}
          options={{
            tabBarLabel: "About",
            tabBarIcon: () => (
              <FeatherIcon name='info' color={"#1A051D"} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
