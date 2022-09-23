import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, Input } from "@rneui/base";
import tw from "twrnc";
import { auth, onAuthStateChanged, signInWithEmailAndPassword } from '../firebaseConfigs'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Home')
      }
    })
  }, [])

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(authUser => {
        console.log(authUser.user)
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
      <Text style={tw`text-center text-2xl`}>Login into your account.</Text>
      <View style={tw`p-5`}>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Login"
          buttonStyle={{
            backgroundColor: "#3772e8",
          }}
          onPress={signIn}
        />
        <Button
          title="Register"
          type="outline"
          buttonStyle={{
            borderColor: "#3772e8",
          }}
          containerStyle={{
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
