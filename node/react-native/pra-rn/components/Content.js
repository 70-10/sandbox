import React from "react";
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Text,
  Icon
} from "native-base";

export default props => {
  const renderItem = item => (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          size={80}
          source={{
            uri: item.thumbnail
          }}
        />
      </Left>
      <Body>
        <Text>{item.album}</Text>
        <Text note>{item.artist}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );

  return (
    <Content>
      <List dataArray={props.items} renderRow={renderItem} />
    </Content>
  );
};
