import React, { useState } from "react";
import { Text, Button } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { AuthContext } from "../../navigation/MainNavigator";

const SignUpRoute = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errors, setErrors] = useState([]);

  const { signUp } = React.useContext(AuthContext);

  return (
    <>
      <Input
        placeholder='Name'
        onChangeText={text => onChangeName(text)}
        value={name}
        leftIcon={<Icon name='user-circle' size={24} color='grey' />}
      />
      <Input
        placeholder='Email'
        onChangeText={text => onChangeEmail(text)}
        value={email}
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
        title='Sign Up'
        onPress={() => signUp({ email, password, name, setErrors })}
      />
      {errors && errors.map(error => <Text>{error}</Text>)}
    </>
  );
};

export default SignUpRoute;
