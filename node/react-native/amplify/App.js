import React from "react";
import Amplify from "aws-amplify";
import { StyleSheet, Text, View } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({
  identityPoolId: "ap-northeast-1:********-****-****-****-************",
  region: "ap-northeast-1",
  userPoolId: "ap-northeast-1_*********",
  userPoolWebClientId: "**************************"
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withAuthenticator(App);
