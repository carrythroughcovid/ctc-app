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
  const [errors, setErrors] = useState([])

  const _signInAsync = async () => {
    setErrors([])
    const response = await fetch('https://carrythroughcovid.herokuapp.com/api/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password
      })
    })
    const json = await response.json()
    if (response.status === 200) {
      const { map } = response.headers
      await AsyncStorage.setItem("access-token", map["access-token"]);
      await AsyncStorage.setItem("client", map["client"]);
      await AsyncStorage.setItem("uid", map["uid"]);
      navigation.navigate("AuthLoading");
    } else if (response.status === 401) {
      setErrors(json.errors)
    } else {
      setErrors(["An error occurred."])
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
        {errors && errors.map(error => <Text>{error}</Text>)}
      </Form>
    </Container>
  )
};

export default SignInScreen;