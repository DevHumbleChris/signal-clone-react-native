import { View, Text, Dimensions, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Icon, Input } from "@rneui/themed";
import ChatList from "./ChatList";
import { db, getDocs, collection } from "../firebaseConfigs";

const height = Dimensions.get("window").height;

const ConversationList = () => {
  const [chats, setChats] = useState([])
  const getChats = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, 'chats'))
      querySnapShot.forEach((doc) => {
        setChats({
          id: doc.id,
          data: doc.data()
        })
      })
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getChats()
  }, [])
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
      {chats.map(chat => (
        <ChatList key={chat.id} id={chat.id}  />
      ))}
    </View>
  );
};

export default ConversationList;
