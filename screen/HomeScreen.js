import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ConversationList from "../components/ConversationList";
import tw from 'twrnc'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "rgb(13, 29, 55)",
        flex: 1,
      }}
    >
      <ConversationList />
      <View style={tw`flex-row mt-auto p-2 justify-evenly mt-3`}>
        <TouchableOpacity>
          <Icon name="chat-processing-outline" type="material-community" color="white" size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pencil-box" type="material-community" color="white" size={35} />
        </TouchableOpacity>
      </View>
      <StatusBar style="black" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default HomeScreen;
