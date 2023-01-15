import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "@rneui/base";
import React from "react";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "900" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontWeight: "600" }}
        >
          Youtube ChatYoutube ChatYoutube Chat
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
