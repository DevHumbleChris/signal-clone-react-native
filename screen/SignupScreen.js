import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { auth, createUserWithEmailAndPassword } from '../firebaseConfigs'

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(authUser => {
        authUser.updateProfile({
          displayName: username
        })
      })
      .catch(err => alert(err.message))
  }
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
        <Input
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Register"
          buttonStyle={{
            backgroundColor: "#3772e8",
          }}
          onPress={registerAccount}
        />
        <Button
          title="Login"
          type="outline"
          buttonStyle={{
            borderColor: "#3772e8",
          }}
          containerStyle={{
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
