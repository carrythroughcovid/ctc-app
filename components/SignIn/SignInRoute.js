import React, { useState } from 'react';
import {
  Text,
  Button,
} from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from "../../navigation/MainNavigator";

const SignInRoute = () => {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState([]);

  const { signIn } = React.useContext(AuthContext);

  return (
    <>
      <Input
        placeholder='Username'
        onChangeText={text => onChangeUsername(text)}
        value={username}
        leftIcon={<Icon name='envelope' size={24} color='grey' />}
      />
      <Input
        placeholder='Password'
        onChangeText={text => onChangePassword(text)}
        value={password}
        secureTextEntry={true}
        leftIcon={<Icon name='lock' size={24} color='grey' />}
      />
      <Button
        title='Sign in'
        onPress={() => signIn({ username, password, setErrors })}
      />
      {errors && errors.map(error => <Text>{error}</Text>)}
    </>
  );
};

export default SignInRoute;