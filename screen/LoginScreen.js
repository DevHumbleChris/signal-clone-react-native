import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, Input } from "@rneui/themed";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={tw`mx-auto`}>
        <Image
          style={{
            height: 200,
            width: 300,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2022/03/Signal-Logo.png",
          }}
        />
      </View>
      <Text style={tw`text-center text-2xl`}>Login into your account.</Text>
      <View style={tw`p-5`}>
        <Input placeholder="email" type="email" />
        <Input placeholder="password" secureTextEntry type="password" />
        <Button
          title="Login"
          buttonStyle={{
            backgroundColor: "#3772e8",
          }}
        />
        <Button
          title="Register"
          type="outline"
          buttonStyle={{
            borderColor: "#3772e8",
          }}
          containerStyle={{
            marginTop: 10
          }}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
