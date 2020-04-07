import React from 'react';
import styled from 'styled-components';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import colours from "../utils/colours";
import { Divider } from 'react-native-elements';

const Container = styled(View)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const AboutScreen = () => {
  return (
    <Container style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>About CTC</Text>
        <Text style={styles.sectionParagraph}>Carry Through Covid is a platform supporting small business through COVID-19.</Text>
        <Text style={styles.sectionTitle}>The mission</Text>
        <Text style={styles.sectionParagraph}>Our mission is to keep small businesses afloat and enable community support through technology.</Text>
        <Text style={styles.sectionTitle}>Who are we?</Text>
        <Text style={styles.sectionParagraph}>A group of volunteers dedicated to helping small Australian businesses.</Text>
        <Divider style={styles.divider}/>
        <Text style={styles.sectionTitle}>Get involved</Text>
        <Text style={styles.sectionParagraph}>Are you a small business or a local customer looking to help small businesses?</Text>
        <Text style={styles.sectionParagraph}>We would love to hear from you.</Text>
        <Text style={styles.sectionParagraph}>Contact us at <Text style={styles.email}>contact@carrythroughcovid.com</Text>.</Text>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.backgroundWhite,
  },
  divider: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: colours.brandAccent3,
    paddingTop: 15,
    paddingBottom: 5,
    fontWeight: "bold",
    fontFamily: "Oswald Regular",
    fontSize: 16,
    textTransform: "uppercase",
  },
  sectionParagraph: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: colours.textUiPrimary,
  },
  scrollContainer: {
    backgroundColor: colours.backgroundWhite,
    paddingHorizontal: 20,
  },
  email: {
    fontWeight: "bold"
  },
});

export default AboutScreen;