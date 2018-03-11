import React from "react";
import { Container } from "native-base";
import { Header, Content } from "./components";

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    const listItems = [
      {
        album: "WAAW",
        artist: "Melotronmelon",
        thumbnail:
          "https://i.scdn.co/image/5b2888ac807e8954abb5b488200cb3f6ae4b82bb"
      },
      {
        album: "Chance",
        artist: "D.A.N.",
        thumbnail:
          "https://i.scdn.co/image/e1647c06a552235310a3001950fd95276828daac"
      },
      {
        album: "Pale",
        artist: "yahyel",
        thumbnail:
          "https://i.scdn.co/image/bf593acfb59d0516ada0bfa996dabf107c3bea51"
      }
    ];
    return (
      <Container>
        <Header title="Practice" />
        <Content items={listItems} />
      </Container>
    );
  }
}
