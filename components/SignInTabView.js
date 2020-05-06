import React, { useState } from "react";
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Button,
  AsyncStorage
} from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components"
import { TabView, TabBar } from "react-native-tab-view";

import colours from "../utils/colours";
import { AuthContext } from "../navigation/MainNavigator";

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

const SignInRoute = ({ navigation }) => {
  const [username, onChangeUsername] = useState("")
  const [password, onChangePassword] = useState("")
  const [errors, setErrors] = useState([])

  const { signIn } = React.useContext(AuthContext);

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
        <Button title="Sign in" onPress={() => signIn({ username, password, setErrors })} />
        {errors && errors.map(error => <Text>{error}</Text>)}
      </Form>
    </Container>
  )
};

const CreateRoute = ({ navigation }) => {
  const [name, onChangeName] = useState("")
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
      navigation.navigate("Main");
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
          placeholder='Name'
          onChangeText={text => onChangeName(text)}
          value={name}
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='grey'
            />
          }
        />
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

const initialLayout = { width: Dimensions.get("window").width };

export default function DetailsTabView({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: "signin", title: "Sign In" },
    { key: "create", title: "Create Account" },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "signin":
        return <SignInRoute navigation={navigation} />;
      case "create":
        return <CreateRoute navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabViewStyle}
      renderTabBar={props => (
        <TabBar
          {...props}
          getLabelText={({ route: { title } }) => title}
          indicatorStyle={styles.indicator}
          tabStyle={styles.tabBarStyle}
          style={styles.tabBar}
          labelStyle={styles.tabBarLabel}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: colours.backgroundWhite,
  },
  paddingContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
  tabViewStyle: {
    backgroundColor: colours.backgroundWhite,
  },
  indicator: {
    height: 3,
    backgroundColor: colours.brand,
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headline: {
    fontFamily: "Lato",
    fontSize: 24,
  },
  headlineContainer: {
    paddingBottom: 16,
    paddingTop: 32,
  },
  tabBarStyle: {
    color: colours.textUiPrimary,
  },
  tabBar: {
    backgroundColor: colours.backgroundWhite,
  },
  tabBarLabel: {
    color: colours.textUiPrimary,
  },
  sectionTitle: {
    color: colours.brand,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
    fontFamily: "Oswald Light",
    fontSize: 16,
  },
  sectionParagraph: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: colours.textUiPrimary,
  },
  serviceTilesContainer: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 15,
  },
  serviceTileBox: {
    marginRight: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: colours.brandAccent1,
    borderRadius: 20,
  },
  serviceTileText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  contactIcon: {
    width: 24,
    height: 24,
  },
  contactText: {
    fontFamily: "Lato",
    fontSize: 16,
    paddingLeft: 16,
    color: colours.textUiSecondary,
  },
});
