import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Input, Button, Icon } from "@rneui/themed";
import { db, collection, addDoc } from "../firebaseConfigs";

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState("");
  const addChatName = async () => {
    if (!chatName) {
      alert('Chat Name Reguired')
    }
    try {
      const docRef = await addDoc(collection(db, 'chats'), {
        chatName
      })
      setChatName('')
      navigation.goBack()
      console.log(docRef.id)
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  }
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`flex-row p-3 mt-3`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            type="material-community"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <Text style={tw`text-xl mx-auto`}>Register Chat Name</Text>
      </View>

      <View style={tw`p-5`}>
      <View style={tw`mt-6`}>
        <Input
          placeholder="Enter Chat Name"
          onChangeText={(text) => setChatName(text)}
          value={chatName}
        />
        <Button
          title="Save Chat"
          buttonStyle={{
            backgroundColor: "#3772e8",
          }}
          onPress={addChatName}
        />
      </View>
      </View>
      <StatusBar style="black" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default AddChatScreen;
