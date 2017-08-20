import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="React Native1" />
        <Greeting name="React Native2" />
        <Greeting name="React Native3" />
        <Blink text="Blink Text" />
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
  },
  big: {
    fontWeight: "bold",
    fontSize: 30
  },
  blue: {
    color: "blue"
  }
});

class Greeting extends React.Component {
  render() {
    return (
      <Text>
        Hello {this.props.name}!
      </Text>
    );
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : "";
    return (
      <Text style={[styles.big, styles.blue]}>
        {display}
      </Text>
    );
  }
}
