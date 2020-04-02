import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import { dummyBusiness } from "../dummy_data/businesses"
import { capitalize } from "lodash";

export default function DetailsScreen({ route }) {
  const { business } = route.params
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.headerImage} source={{ uri: 'https://www.adpstore.com.au/wp-content/uploads/2017/08/shop-layout-1440x961.jpg' }} />
      <View style={styles.paddingContainer}>
        <View style={styles.titleContainer}>
          <Image style={styles.logoImage} source={{ uri: 'https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/icons/cheeseburger.png' }} />
          <View style={styles.titleDetailsContainer}>
            <Text style={styles.title}>{business.name}</Text>
            <Text style={styles.subTitle}>{capitalize(business.categories[0].name)} / {business.suburb}</Text>
          </View>
        </View>
        <Button title="Website" buttonStyle={styles.actionButton} />
      </View>
      <View style={styles.paddingContainer}>
        <View>
          <Text style={styles.sectionTitle}>CURRENT SERVICES</Text>
          <Text style={styles.sectionParagraph}>
            {business.offerings.map(offering => capitalize(offering.name)).join(", ")}
          </Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>DETAILS</Text>
          <Text style={styles.sectionParagraph}>
            Here are the details about the particular offering from the store. It will just be free text for them to describe the offerings above.
          </Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <Text style={styles.sectionParagraph}>
            Business owners will be asked to add info about their business, and this is an opportunity to tell their story and connect with the community.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

DetailsScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  paddingContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  textHeading: {
    fontSize: 30,
  },
  headerImage: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  titleContainer: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleDetailsContainer: {
    display: 'flex',
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
  },
  subTitle: {
    fontSize: 15,
  },
  sectionTitle: {
    color: '#9060EB',
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  actionButton: {
    backgroundColor: '#6979F8',
  },
  sectionParagraph: {
    fontSize: 16,
  },
});
