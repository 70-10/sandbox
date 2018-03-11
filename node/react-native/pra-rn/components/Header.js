import React from "react";
import { Header, Left, Right, Body, Title, Button, Icon } from "native-base";

export default props => (
  <Header>
    <Left>
      <Button transparent>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);
