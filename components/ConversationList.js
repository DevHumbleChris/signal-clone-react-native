import { View, Text, Dimensions, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Icon, Input } from "@rneui/base";
import ChatList from "./ChatList";
import { db, getDocs, collection } from "../firebaseConfigs";

const height = Dimensions.get("window").height;

const ConversationList = ({ navigation }) => {
  const [chats, setChats] = useState([])
  const getChats = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, 'chats'))
      const tempData = []
      querySnapShot.forEach((doc) => {
        tempData.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setChats(tempData)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getChats()
  }, [chats])
  return (
    <View
    >
      <View style={tw`p-5 flex-row justify-between items-center`}>
        <Text style={tw`text-3xl`}>Chats</Text>
        <TouchableOpacity>
          <Icon
            name="logout"
            type="material-community"
            size={30}
            color="black"
          />
          </TouchableOpacity>
      </View>
      <ScrollView>
      {chats.map(({ id, data: { chatName }}) => {
        return (
          <ChatList key={id} chatName={chatName} id={id} />
        )
      })}
      </ScrollView>
    </View>
  );
};

export default ConversationList;
