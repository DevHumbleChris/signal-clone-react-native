import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Chat from "../components/Chat";
import { Icon } from "@rneui/themed";
import tw from 'twrnc'

const ChatScreen = ({ route, navigation }) => {
  // useLayoutEffect(() => {
  //   const unsubscribe = navigation.setOptions({
  //     headerTitle: route.params.chatName,
  //     headerRight: () => (
  //       <View style={tw`flex-row items-center justify-evenly`}>
  //         <TouchableOpacity style={tw`mx-2`}>
  //           <Icon
  //             name="video"
  //             type="material-community"
  //             color="black"
  //             size={35}
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity style={tw`mx-2`}>
  //           <Icon
  //             name="phone"
  //             type="material-community"
  //             color="black"
  //             size={30}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   });
  //   return unsubscribe;
  // }, []);
  return <Chat />;
};

export default ChatScreen;
