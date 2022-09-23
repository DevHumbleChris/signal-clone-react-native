import { View, Text } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/themed";
import tw from "twrnc";

const ChatList = () => {
  return (
    <ListItem style={tw``}>
      <Avatar
        rounded
        size={55}
        source={{
          uri: "https://randomuser.me/api/portraits/men/36.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={tw`text-lg font-bold text-gray-600`}>
          Hello
        </ListItem.Title>
        <ListItem.Subtitle
          style={tw`text-gray-500`}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          hello hioeu hello hioeuhello hioeuhello hioeuhello hioeuhello
          hioeuhello hioeu
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ChatList;
