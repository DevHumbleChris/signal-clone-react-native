import { View, Text, } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/base";
import tw from "twrnc";

const ChatList = ({ id, chatName, navigation }) => {
  const enterChat = () => {
    // navigation.navigate('ChatScreen', {
    //   id,
    //   chatName
    // })
    navigation.navigate('ChatScreen')
  }
  return (
    <ListItem style={tw``} key={id} onPress={enterChat}>
      <Avatar
        rounded
        size={55}
        source={{
          uri: "https://randomuser.me/api/portraits/men/36.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={tw`text-lg font-bold text-gray-600`}>
          { chatName }
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
