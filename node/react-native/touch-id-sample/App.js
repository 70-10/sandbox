import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fingerprint } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authStatus: "" };
  }

  async componentDidMount() {
    const hasHardware = await Fingerprint.hasHardwareAsync();
    console.log(hasHardware);

    if (hasHardware) {
      const hasFingerprintAuth = await Fingerprint.isEnrolledAsync();
      this.setState({ hasFingerprintAuth });
      this.authFunction();
    }
  }

  async authFunction() {
    try {
      const result = await Fingerprint.authenticateAsync("Sample App Unlock");

      if (!result.success) {
        this.setState({
          authStatus: "fail",
          authError: result.error
        });
        console.log("Fingerprint Auth Failed", result);
        return;
      }

      this.setState({ authStatus: "success" });
    } catch (err) {
      console.error("authFunction Error", err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, World</Text>
        <Text>{this.state.authStatus}</Text>
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
