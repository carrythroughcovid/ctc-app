import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const Container = styled(View)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const AboutScreen = () => {
  return (
    <Container>
      <Text>About CTC</Text>
    </Container>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};

export default AboutScreen;