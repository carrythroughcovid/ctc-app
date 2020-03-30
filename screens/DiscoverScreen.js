import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';
import { Input } from 'react-native-elements';

import CategoryTile from '../components/CategoryTile'

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeading}>Discover Businesses</Text>
      <Input placeholder="Search for a business" />
      <Text style={styles.textHeading}>Categories</Text>
      <View style={styles.welcomeContainer}>
        {/* TODO: Insert all tiles and style properly */}
        <CategoryTile />
      </View>
    </SafeAreaView>
  );
}

DiscoverScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
  contentContainer: {
    // paddingTop: 50,
  },
  textHeading: {
    fontSize: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    height: '100%',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  }
});
