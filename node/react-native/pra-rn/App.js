import React from "react";
import { Image } from "react-native";
import { Container, Text, Card, CardItem, Body } from "native-base";
import { StackNavigator } from "react-navigation";
import { Content } from "./components";

const ListScreen = ({ navigation }) => {
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
      <Content items={listItems} navigation={navigation} />
    </Container>
  );
};

const DetailScreen = ({ navigation }) => {
  return (
    <Container padder>
      <Card>
        <CardItem>
          <Body>
            <Text>{navigation.state.params.album}</Text>
            <Text note>{navigation.state.params.artist}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: navigation.state.params.thumbnail }}
            style={{ height: 400, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    </Container>
  );
};

export default StackNavigator(
  {
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.album
      })
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Practice"
      })
    }
  },
  {
    initialRouteName: "List"
  }
);
