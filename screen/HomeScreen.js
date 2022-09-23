import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ConversationList from "../components/ConversationList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "rgb(13, 29, 55)",
        flex: 1,
      }}
    >
      <ConversationList />
      <StatusBar style="black" backgroundColor="white" />
    </SafeAreaView>
  );
};

export default HomeScreen;
