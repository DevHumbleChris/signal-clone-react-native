import { View, Text } from "react-native";
import React from "react";
import { Image, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const SignupScreen = ({ navigation }) => {
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
      <Text style={tw`text-center text-2xl`}>Register an account.</Text>
      <View style={tw`p-5`}>
        <Input placeholder="username"/>
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" secureTextEntry />
        <Button
          title="Register"
          buttonStyle={{
            backgroundColor: "#3772e8",
          }}
        />
        <Button
          title="Login"
          type="outline"
          buttonStyle={{
            borderColor: "#3772e8",
          }}
          containerStyle={{
            marginTop: 10
          }}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
