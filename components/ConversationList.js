import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon, Input } from "@rneui/themed";
import ChatList from "./ChatList";

const height = Dimensions.get("window").height;

const ConversationList = () => {
  return (
    <View
      style={{
        height: height * 0.9,
        backgroundColor: "white",
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
      }}
    >
      <View style={tw`p-5 flex-row justify-between items-center`}>
        <Text style={tw`text-3xl`}>Chats</Text>
        <Icon
          name="dots-vertical"
          type="material-community"
          size={25}
          color="black"
        />
      </View>
      <ChatList />
    </View>
  );
};

export default ConversationList;
