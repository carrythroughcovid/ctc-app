import React, { useState, useEffect } from "react";
import {
  Button,
  AsyncStorage,
  View,
  Text
} from 'react-native';
import styled from "styled-components"
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled(View)`
  display: flex;
  align-items: center;
`

const Form = styled(View)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 80%;
`

const SignInScreen = ({ navigation }) => {
  const [username, onChangeUsername] = useState("")
  const [password, onChangePassword] = useState("")

  const _signInAsync = async () => {
    const response = await fetch('https://carrythroughcovid.herokuapp.com/api/v1/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password
      })
    })
    if (response.status === 200) {
      await AsyncStorage.setItem("userToken", "abc");
      navigation.navigate("AuthLoading");
    } else {
      // set some error
    }
  };

  return (
    <Container>
      <Form>
        <Text></Text>
        <Input
          placeholder='Username'
          onChangeText={text => onChangeUsername(text)}
          value={username}
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='grey'
            />
          }
        />
        <Input
          placeholder='Password'
          onChangeText={text => onChangePassword(text)}
          value={password}
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='grey'
            />
          }
        />
        <Button title="Sign in" onPress={_signInAsync} />
      </Form>
    </Container>
  )
};

export default SignInScreen;