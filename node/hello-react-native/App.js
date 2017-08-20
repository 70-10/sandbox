import React from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  Content
} from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Hello React Native</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>Hello React Native!!</Text>
        </Content>
      </Container>
    );
  }
}
