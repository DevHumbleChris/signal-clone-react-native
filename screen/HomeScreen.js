import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ConversationList from "../components/ConversationList";
import tw from 'twrnc'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}
    >
      <ConversationList navigation={navigation} />
      <TouchableOpacity style={tw`absolute bottom-15 right-5 rounded-full bg-[#3772e8] p-3 `} onPress={() => navigation.navigate('AddChat')}>
          <Icon
            name="chat"
            type="material-community"
            size={30}
            color="white"
          />
      </TouchableOpacity>
      <StatusBar style="white" />
    </SafeAreaView>
  );
};

export default HomeScreen;
